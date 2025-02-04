import { Column, Entity } from "typeorm";

@Entity("paypals", { schema: "web3wallet" })
export class Paypals {
  @Column("varchar", { primary: true, name: "paypal_id", length: 255 })
  paypalId: string;

  @Column("varchar", {
    name: "wallet_id",
    nullable: true,
    comment: "Associated wallet ID",
    length: 255,
  })
  walletId: string | null;

  @Column("varchar", {
    name: "account",
    nullable: true,
    comment: "Account name",
    length: 255,
  })
  account: string | null;

  @Column("varchar", {
    name: "access_token",
    nullable: true,
    comment: "API access token",
    length: 255,
  })
  accessToken: string | null;
}
