import { Column, Entity } from "typeorm";

@Entity("sepas", { schema: "web3wallet" })
export class Sepas {
  @Column("varchar", { primary: true, name: "sepa_id", length: 255 })
  sepaId: string;

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
    name: "swift_bic",
    nullable: true,
    comment: "SWIFT/BIC code",
    length: 255,
  })
  swiftBic: string | null;

  @Column("varchar", {
    name: "account_number",
    nullable: true,
    comment: "IBAN number",
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
