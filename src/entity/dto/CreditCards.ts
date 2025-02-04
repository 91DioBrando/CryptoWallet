import { Column, Entity } from "typeorm";

@Entity("credit_cards", { schema: "web3wallet" })
export class CreditCards {
  @Column("varchar", { primary: true, name: "card_id", length: 255 })
  cardId: string;

  @Column("varchar", {
    name: "wallet_id",
    nullable: true,
    comment: "Associated wallet ID",
    length: 255,
  })
  walletId: string | null;

  @Column("varchar", {
    name: "card_number",
    nullable: true,
    comment: "Credit card number",
    length: 255,
  })
  cardNumber: string | null;

  @Column("varchar", {
    name: "expiration_date",
    nullable: true,
    comment: "Expiration date (MM/YY)",
    length: 255,
  })
  expirationDate: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "Cardholder name",
    length: 255,
  })
  name: string | null;

  @Column("varchar", {
    name: "cvv",
    nullable: true,
    comment: "Card security code",
    length: 255,
  })
  cvv: string | null;

  @Column("varchar", {
    name: "address_line1",
    nullable: true,
    comment: "Billing address line 1",
    length: 255,
  })
  addressLine1: string | null;

  @Column("varchar", {
    name: "address_line2",
    nullable: true,
    comment: "Billing address line 2",
    length: 255,
  })
  addressLine2: string | null;

  @Column("varchar", {
    name: "city",
    nullable: true,
    comment: "City",
    length: 255,
  })
  city: string | null;

  @Column("varchar", {
    name: "postal_code",
    nullable: true,
    comment: "Postal code",
    length: 20,
  })
  postalCode: string | null;

  @Column("varchar", {
    name: "country",
    nullable: true,
    comment: "Country",
    length: 255,
  })
  country: string | null;
}
