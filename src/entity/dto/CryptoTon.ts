import { Column, Entity } from "typeorm";

@Entity("crypto_ton", { schema: "web3wallet" })
export class CryptoTon {
  @Column("varchar", { primary: true, name: "ton_id", length: 255 })
  tonId: string;

  @Column("varchar", {
    name: "wallet_id",
    nullable: true,
    comment: "Associated wallet ID",
    length: 255,
  })
  walletId: string | null;

  @Column("varchar", {
    name: "wallet_address",
    nullable: true,
    comment: "TON wallet address",
    length: 255,
  })
  walletAddress: string | null;

  @Column("varchar", {
    name: "token_address",
    nullable: true,
    comment: "Token address",
    length: 255,
  })
  tokenAddress: string | null;
}
