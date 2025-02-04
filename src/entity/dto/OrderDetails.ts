import { Column, Entity } from "typeorm";

@Entity("order_details", { schema: "web3wallet" })
export class OrderDetails {
  @Column("varchar", {
    primary: true,
    name: "order_id",
    comment: "Associated order ID, hexadecimal string",
    length: 255,
  })
  orderId: string;

  @Column("varchar", {
    name: "tx_id",
    nullable: true,
    comment: "Associated transaction ID, hexadecimal string",
    length: 255,
  })
  txId: string | null;

  @Column("enum", {
    name: "tx_method",
    nullable: true,
    comment: "Transaction method associated with the order",
    enum: ["direct_payment", "escrow_payment", "subscription_payment"],
  })
  txMethod: "direct_payment" | "escrow_payment" | "subscription_payment" | null;

  @Column("varchar", {
    name: "promotion_id",
    nullable: true,
    comment: "Associated promotion ID, hexadecimal string",
    length: 255,
  })
  promotionId: string | null;

  @Column("enum", {
    name: "promotion_method",
    nullable: true,
    comment: "Promotion method associated with the order",
    enum: ["single_use", "percentage_promotion", "direct_discount_promotion"],
  })
  promotionMethod:
    | "single_use"
    | "percentage_promotion"
    | "direct_discount_promotion"
    | null;

  @Column("float", {
    name: "promotion_amount",
    nullable: true,
    comment: "Promotion amount",
    precision: 12,
  })
  promotionAmount: number | null;

  @Column("enum", {
    name: "amount_state",
    nullable: true,
    comment: "Timing of promotion application",
    enum: ["before_promotion", "after_promotion"],
  })
  amountState: "before_promotion" | "after_promotion" | null;

  @Column("varchar", {
    name: "offer_id",
    nullable: true,
    comment: "Associated offer, hexadecimal string",
    length: 255,
  })
  offerId: string | null;

  @Column("varchar", {
    name: "offer_option_id",
    nullable: true,
    comment: "Offer option associated with the order, hexadecimal string",
    length: 255,
  })
  offerOptionId: string | null;

  @Column("float", {
    name: "offer_amount",
    nullable: true,
    comment: "Amount associated with the offer",
    precision: 12,
  })
  offerAmount: number | null;

  @Column("datetime", {
    name: "escrow_updated_at",
    nullable: true,
    comment: "Escrow status update timestamp",
  })
  escrowUpdatedAt: Date | null;

  @Column("enum", {
    name: "escrow_updated_method",
    nullable: true,
    comment: "Method used to update escrow status",
    enum: ["status_update", "manual_adjustment", "automatic"],
  })
  escrowUpdatedMethod:
    | "status_update"
    | "manual_adjustment"
    | "automatic"
    | null;

  @Column("varchar", {
    name: "escrow_updated_by",
    nullable: true,
    comment: "Escrow status updated by, hexadecimal string",
    length: 255,
  })
  escrowUpdatedBy: string | null;

  @Column("datetime", {
    name: "escrow_end_at",
    nullable: true,
    comment: "Escrow end date",
  })
  escrowEndAt: Date | null;

  @Column("enum", {
    name: "escrow_end_method",
    nullable: true,
    comment: "Method used to end escrow",
    enum: ["completion", "cancellation", "refund", "dispute_resolution"],
  })
  escrowEndMethod:
    | "completion"
    | "cancellation"
    | "refund"
    | "dispute_resolution"
    | null;

  @Column("json", {
    name: "escrow_history_tx_ids",
    nullable: true,
    comment: "Transaction history of the escrow",
  })
  escrowHistoryTxIds: object | null;

  @Column("timestamp", {
    name: "subscription_interval",
    nullable: true,
    comment: "Subscription interval",
  })
  subscriptionInterval: Date | null;

  @Column("timestamp", {
    name: "subscription_interval_start",
    nullable: true,
    comment: "Subscription interval start timestamp",
  })
  subscriptionIntervalStart: Date | null;

  @Column("timestamp", {
    name: "subscription_interval_end",
    nullable: true,
    comment: "Subscription interval end timestamp",
  })
  subscriptionIntervalEnd: Date | null;

  @Column("float", {
    name: "subscription_interval_max",
    nullable: true,
    comment: "Maximum amount within the subscription interval",
    precision: 12,
  })
  subscriptionIntervalMax: number | null;

  @Column("float", {
    name: "subscription_interval_paid",
    nullable: true,
    comment: "Amount paid within the current subscription interval",
    precision: 12,
  })
  subscriptionIntervalPaid: number | null;

  @Column("datetime", {
    name: "subscription_end_at",
    nullable: true,
    comment: "Subscription end timestamp",
  })
  subscriptionEndAt: Date | null;

  @Column("enum", {
    name: "subscription_end_method",
    nullable: true,
    comment: "Reason for subscription termination",
    enum: ["user_cancelled", "auto_expire", "admin_terminated"],
  })
  subscriptionEndMethod:
    | "user_cancelled"
    | "auto_expire"
    | "admin_terminated"
    | null;

  @Column("json", {
    name: "subscription_history_tx_ids",
    nullable: true,
    comment: "Transaction history for the subscription",
  })
  subscriptionHistoryTxIds: object | null;
}
