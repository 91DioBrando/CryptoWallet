import { v4 as uuidv4 } from 'uuid';
import { Request,Response } from 'express';
import { compare } from 'bcryptjs';
import { UserAccount } from './entity/dto/UserAccount';
import { Wallet } from './entity/dto/Wallet';
import { Balances} from './entity/dto/Balances';
import { Transactions as Transaction } from './entity/dto/Transactions';
import { dataSource } from './data-source';

export const directTransfer = async (req: Request, res: Response): Promise<void> => {
    const { sender_id, receiver_id, amount, currency, pin } = req.body;

    if (!sender_id || !receiver_id || !amount || !currency || !pin) {
        res.status(400).json({ error: 'sender_id, receiver_id, amount, currency, and pin are required' });
        return;
    }

    // balanceUsd
    const balanceColumn = `balance${currency.charAt(0).toUpperCase()}${currency.slice(1).toLowerCase()}`;
    const now = new Date();
    const tx_id = uuidv4();

    try {
        const transactionResult = await dataSource.transaction(async (manager) => {
            // 1. **检查是否是重放攻击**
            await checkForReplayAttack(manager, tx_id);

            // 2. **验证发送者账户和 PIN**
            await verifySenderAccountAndPin(manager, sender_id, pin);

            // 3. **获取并锁定余额**
            const { senderBalance, receiverBalance } = await getAndLockBalances(manager, sender_id, receiver_id);

            // 4. **验证余额是否足够**
            if (senderBalance[balanceColumn] < amount) {
                throw new Error('Insufficient balance');
            }

            // 5. **更新余额**
            await updateBalances(manager, senderBalance, receiverBalance, balanceColumn, amount);

            // 6. **记录交易**
            await recordTransaction(manager, tx_id, sender_id, receiver_id, amount, currency, now);

            return {
                message: 'Direct transfer successful!',
                transaction: {
                    tx_id,
                    sender_id,
                    receiver_id,
                    amount,
                    currency,
                    new_sender_balance: senderBalance[balanceColumn],
                },
            };
        });

        res.json(transactionResult);
    } catch (error) {
        console.error('Error processing direct transfer:', error);
        res.status(500).json({ error: 'Failed to process direct transfer', details: error.message });
    }
};

async function verifySenderAccountAndPin(manager, sender_id: string, pin: string) {
    const senderAccount = await manager.findOne(UserAccount, { where: { userId: sender_id } });
    if (!senderAccount) {
        throw new Error('Sender account not found');
    }
    // pin: 用户输入明文 serderAccount.pin: 数据库中密文 创建account时：await hash(plainPin, 10);
    const isPinValid = await compare(pin, senderAccount.pin);
    if (!isPinValid) {
        throw new Error('Invalid PIN');
    }
}

async function getAndLockBalances(manager, sender_id: string, receiver_id: string) {
    // 获取发送者 & 接收者钱包
    const senderWallet = await manager.findOne(Wallet, { where: { userId: sender_id } });
    const receiverWallet = await manager.findOne(Wallet, { where: { userId: receiver_id } });

    if (!senderWallet || !receiverWallet) {
        throw new Error('Wallet not found');
    }

    //  **使用 FOR UPDATE 锁定余额，防止条件竞争**
    const senderBalance = await manager
        .createQueryBuilder(Balances, 'balances')
        .where('balances.walletId = :walletId', { walletId: senderWallet.walletId })
        .setLock('pessimistic_write')
        .getOne();

    const receiverBalance = await manager
        .createQueryBuilder(Balances, 'balances')
        .where('balances.walletId = :walletId', { walletId: receiverWallet.walletId })
        .setLock('pessimistic_write')
        .getOne();

    if (!senderBalance || !receiverBalance) {
        throw new Error('Balance not found');
    }

    return { senderBalance, receiverBalance };
}

async function updateBalances(manager, senderBalance, receiverBalance, balanceColumn, amount) {
    senderBalance[balanceColumn] -= amount;
    receiverBalance[balanceColumn] += amount;

    await manager.save(senderBalance);
    await manager.save(receiverBalance);
}

async function recordTransaction(manager, tx_id, sender_id, receiver_id, amount, currency, now) {
    const transaction = new Transaction();
    transaction.txId = tx_id;
    transaction.txState = 'finished';
    transaction.txMethod = 'direct_payment';
    transaction.txFrom = sender_id;
    transaction.txTo = receiver_id;
    transaction.price = amount;
    transaction.currency = currency;
    transaction.createdAt = now;

    await manager.save(transaction);
}

async function checkForReplayAttack(manager, tx_id) {
    const existingTransaction = await manager.findOne(Transaction, { where: { txId: tx_id } });
    if (existingTransaction) {
        throw new Error('Replay attack detected!');
    }
}