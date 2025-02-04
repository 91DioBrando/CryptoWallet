import { Column, Entity } from "typeorm";

@Entity("wallet", { schema: "web3wallet" })
export class Wallet {
  @Column("varchar", {
    name: "user_id",
    nullable: true,
    comment: "Associated user ID",
    length: 255,
  })
  userId: string | null;

  @Column("varchar", {
    primary: true,
    name: "wallet_id",
    comment: "Primary identifier token, hexadecimal string",
    length: 255,
  })
  walletId: string;

  @Column("enum", {
    name: "wallet_currency",
    nullable: true,
    comment: "Default currency for accounting",
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
      "ETB",
      "CDF",
      "MMK",
      "KES",
      "GHS",
      "NPR",
      "VES",
      "IQD",
      "TZS",
    ],
  })
  walletCurrency:
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
    | "ETB"
    | "CDF"
    | "MMK"
    | "KES"
    | "GHS"
    | "NPR"
    | "VES"
    | "IQD"
    | "TZS"
    | null;

  @Column("enum", {
    name: "last_withdrew_method",
    nullable: true,
    comment: "Last withdrawal method used",
    enum: [
      "bank_transfer_withdrawal",
      "credit_card_withdrawal",
      "c2c_withdrawal",
      "cryptocurrency_withdrawal",
      "third_party_payment_withdrawal",
    ],
  })
  lastWithdrewMethod:
    | "bank_transfer_withdrawal"
    | "credit_card_withdrawal"
    | "c2c_withdrawal"
    | "cryptocurrency_withdrawal"
    | "third_party_payment_withdrawal"
    | null;

  @Column("enum", {
    name: "last_request_state",
    nullable: true,
    comment: "Last method used for incoming funds",
    enum: [
      "bank_transfer",
      "credit_card",
      "c2c_transfer",
      "cryptocurrency",
      "third_party_payment",
      "invoice_bill_code_generation",
    ],
  })
  lastRequestState:
    | "bank_transfer"
    | "credit_card"
    | "c2c_transfer"
    | "cryptocurrency"
    | "third_party_payment"
    | "invoice_bill_code_generation"
    | null;
}
