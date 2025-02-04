import { Column, Entity } from "typeorm";

@Entity("dependent_transactions", { schema: "web3wallet" })
export class DependentTransactions {
  @Column("varchar", {
    primary: true,
    name: "tx_id",
    comment: "Primary transaction ID, hexadecimal string",
    length: 255,
  })
  txId: string;

  @Column("varchar", {
    name: "dependent_tx_id",
    nullable: true,
    comment: "Transaction dependency ID, hexadecimal string",
    length: 255,
  })
  dependentTxId: string | null;

  @Column("enum", {
    name: "method",
    nullable: true,
    comment: "Dependency method",
    enum: [
      "promotion",
      "air_drop",
      "coupon",
      "cashback",
      "refund",
      "bonus",
      "discount",
    ],
  })
  method:
    | "promotion"
    | "air_drop"
    | "coupon"
    | "cashback"
    | "refund"
    | "bonus"
    | "discount"
    | null;
}
