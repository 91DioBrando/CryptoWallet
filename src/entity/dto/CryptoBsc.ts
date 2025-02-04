import { Column, Entity } from "typeorm";

@Entity("crypto_bsc", { schema: "web3wallet" })
export class CryptoBsc {
  @Column("varchar", { primary: true, name: "bsc_id", length: 255 })
  bscId: string;

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
    comment: "BSC wallet address",
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
