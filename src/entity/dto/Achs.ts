import { Column, Entity } from "typeorm";

@Entity("achs", { schema: "web3wallet" })
export class Achs {
  @Column("varchar", { primary: true, name: "ach_id", length: 255 })
  achId: string;

  @Column("varchar", {
    name: "wallet_id",
    nullable: true,
    comment: "Associated wallet ID",
    length: 255,
  })
  walletId: string | null;

  @Column("varchar", {
    name: "account_name",
    nullable: true,
    comment: "Account holder name",
    length: 255,
  })
  accountName: string | null;

  @Column("varchar", {
    name: "routing_number",
    nullable: true,
    comment: "Bank routing number",
    length: 255,
  })
  routingNumber: string | null;

  @Column("varchar", {
    name: "swift_bic",
    nullable: true,
    comment: "SWIFT/BIC code",
    length: 255,
  })
  swiftBic: string | null;

  @Column("varchar", {
    name: "account_number",
    nullable: true,
    comment: "BAN number",
    length: 255,
  })
  accountNumber: string | null;

  @Column("varchar", {
    name: "bank_name",
    nullable: true,
    comment: "Bank name (automatically fetched from BIC)",
    length: 255,
  })
  bankName: string | null;

  @Column("varchar", {
    name: "bank_address",
    nullable: true,
    comment: "Bank address (automatically fetched from BIC)",
    length: 255,
  })
  bankAddress: string | null;
}
