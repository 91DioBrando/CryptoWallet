import { Column, Entity } from "typeorm";

@Entity("related_transactions", { schema: "web3wallet" })
export class RelatedTransactions {
  @Column("varchar", {
    primary: true,
    name: "tx_id",
    comment: "Primary transaction ID, hexadecimal string",
    length: 255,
  })
  txId: string;

  @Column("varchar", {
    name: "related_tx_id",
    nullable: true,
    comment: "Related transaction ID, hexadecimal string",
    length: 255,
  })
  relatedTxId: string | null;

  @Column("enum", {
    name: "method",
    nullable: true,
    comment: "Method for the related transaction",
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
