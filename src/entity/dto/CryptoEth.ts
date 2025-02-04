import { Column, Entity } from "typeorm";

@Entity("crypto_eth", { schema: "web3wallet" })
export class CryptoEth {
  @Column("varchar", { primary: true, name: "eth_id", length: 255 })
  ethId: string;

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
    comment: "ETH wallet address",
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
