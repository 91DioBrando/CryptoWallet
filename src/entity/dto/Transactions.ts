import { Column, Entity } from "typeorm";

@Entity("transactions", { schema: "web3wallet" })
export class Transactions {
  @Column("varchar", {
    primary: true,
    name: "tx_id",
    comment: "Primary identifier token, hexadecimal string",
    length: 255,
  })
  txId: string;

  @Column("varchar", {
    name: "order_id",
    nullable: true,
    comment: "Associated order ID",
    length: 255,
  })
  orderId: string | null;

  @Column("tinyint", {
    name: "nsfw_archived",
    nullable: true,
    comment: "Whether the transaction is hidden",
    width: 1,
  })
  nsfwArchived: boolean | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    comment: "Whether the transaction is deleted",
    width: 1,
  })
  deleted: boolean | null;

  @Column("enum", {
    name: "tx_state",
    nullable: true,
    comment: "State of the transaction",
    enum: ["pending", "finished", "cancelled", "hidden", "refunded"],
  })
  txState: "pending" | "finished" | "cancelled" | "hidden" | "refunded" | null;

  @Column("enum", {
    name: "tx_method",
    nullable: true,
    comment: "Method used for the transaction",
    enum: ["direct_payment", "escrow_payment", "subscription_payment"],
  })
  txMethod: "direct_payment" | "escrow_payment" | "subscription_payment" | null;

  @Column("varchar", {
    name: "created_by",
    nullable: true,
    comment: "Primary identifier token, hexadecimal string",
    length: 255,
  })
  createdBy: string | null;

  @Column("varchar", {
    name: "tx_from",
    nullable: true,
    comment: "Sender ID, primary identifier token, hexadecimal string",
    length: 255,
  })
  txFrom: string | null;

  @Column("varchar", {
    name: "tx_to",
    nullable: true,
    comment: "Receiver ID, primary identifier token, hexadecimal string",
    length: 255,
  })
  txTo: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    comment: "Transaction creation timestamp",
  })
  createdAt: Date | null;

  @Column("enum", {
    name: "created_method",
    nullable: true,
    comment: "Method used to create the transaction",
    enum: ["by_vti3", "by_indiapp", "by_other", "by_api", "by_admin"],
  })
  createdMethod:
    | "by_vti3"
    | "by_indiapp"
    | "by_other"
    | "by_api"
    | "by_admin"
    | null;

  @Column("datetime", {
    name: "finished_at",
    nullable: true,
    comment: "Transaction completion timestamp",
  })
  finishedAt: Date | null;

  @Column("enum", {
    name: "finished_method",
    nullable: true,
    comment: "Method used to complete the transaction",
    enum: ["direct", "manual", "automatic", "admin"],
  })
  finishedMethod: "direct" | "manual" | "automatic" | "admin" | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    comment: "Transaction update timestamp",
  })
  updatedAt: Date | null;

  @Column("enum", {
    name: "updated_method",
    nullable: true,
    comment: "Method used to update the transaction",
    enum: ["deleted", "modified"],
  })
  updatedMethod: "deleted" | "modified" | null;

  @Column("float", {
    name: "price",
    nullable: true,
    comment: "Transaction amount",
    precision: 12,
  })
  price: number | null;

  @Column("enum", {
    name: "currency",
    nullable: true,
    comment: "Currency type (USD, EUR, CNY, etc.)",
    enum: [
      "USD",
      "EUR",
      "JPY",
      "GBP",
      "AUD",
      "CAD",
      "CHF",
      "CNY",
      "HKD",
      "NZD",
      "KRW",
      "SGD",
      "SEK",
      "NOK",
      "MXN",
      "INR",
      "RUB",
      "ZAR",
      "BRL",
      "TRY",
      "TWD",
      "DKK",
      "PLN",
      "THB",
      "IDR",
      "HUF",
      "CZK",
      "ILS",
      "MYR",
      "PHP",
      "PKR",
      "CLP",
      "AED",
      "SAR",
      "COP",
      "EGP",
      "VND",
      "BDT",
      "KWD",
      "QAR",
      "UAH",
      "PEN",
      "MAD",
      "NGN",
      "KZT",
      "ARS",
      "DZD",
      "LKR",
      "OMR",
      "BHD",
    ],
  })
  currency:
    | "USD"
    | "EUR"
    | "JPY"
    | "GBP"
    | "AUD"
    | "CAD"
    | "CHF"
    | "CNY"
    | "HKD"
    | "NZD"
    | "KRW"
    | "SGD"
    | "SEK"
    | "NOK"
    | "MXN"
    | "INR"
    | "RUB"
    | "ZAR"
    | "BRL"
    | "TRY"
    | "TWD"
    | "DKK"
    | "PLN"
    | "THB"
    | "IDR"
    | "HUF"
    | "CZK"
    | "ILS"
    | "MYR"
    | "PHP"
    | "PKR"
    | "CLP"
    | "AED"
    | "SAR"
    | "COP"
    | "EGP"
    | "VND"
    | "BDT"
    | "KWD"
    | "QAR"
    | "UAH"
    | "PEN"
    | "MAD"
    | "NGN"
    | "KZT"
    | "ARS"
    | "DZD"
    | "LKR"
    | "OMR"
    | "BHD"
    | null;
}
