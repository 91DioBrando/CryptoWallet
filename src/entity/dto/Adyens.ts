import { Column, Entity } from "typeorm";

@Entity("adyens", { schema: "web3wallet" })
export class Adyens {
  @Column("varchar", { primary: true, name: "adyen_id", length: 255 })
  adyenId: string;

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
