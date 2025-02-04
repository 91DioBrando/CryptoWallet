import { Column, Entity } from "typeorm";

@Entity("orders", { schema: "web3wallet" })
export class Orders {
  @Column("varchar", {
    primary: true,
    name: "order_id",
    comment: "Order ID, hexadecimal string",
    length: 255,
  })
  orderId: string;

  @Column("tinyint", {
    name: "nsfw_archived",
    nullable: true,
    comment: "Whether the order is hidden",
    width: 1,
  })
  nsfwArchived: boolean | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    comment: "Whether the order is deleted",
    width: 1,
  })
  deleted: boolean | null;

  @Column("enum", {
    name: "order_state",
    nullable: true,
    comment: "State of the order",
    enum: ["created", "pending", "finished", "cancelled", "refunded", "hidden"],
  })
  orderState:
    | "created"
    | "pending"
    | "finished"
    | "cancelled"
    | "refunded"
    | "hidden"
    | null;

  @Column("enum", {
    name: "order_method",
    nullable: true,
    comment: "Payment method used for the order",
    enum: ["direct_payment", "escrow_payment", "subscription_payment"],
  })
  orderMethod:
    | "direct_payment"
    | "escrow_payment"
    | "subscription_payment"
    | null;

  @Column("varchar", {
    name: "referrer_user_id",
    nullable: true,
    comment: "ID of the user who referred the order, hexadecimal string",
    length: 255,
  })
  referrerUserId: string | null;

  @Column("enum", {
    name: "referrer_method",
    nullable: true,
    comment: "Method used to refer the order",
    enum: [
      "event",
      "messaging_app",
      "social",
      "email_invite",
      "sms_invite",
      "indi-app",
      "import_provider",
    ],
  })
  referrerMethod:
    | "event"
    | "messaging_app"
    | "social"
    | "email_invite"
    | "sms_invite"
    | "indi-app"
    | "import_provider"
    | null;

  @Column("varchar", {
    name: "created_by",
    nullable: true,
    comment: "ID of the user who created the order, hexadecimal string",
    length: 255,
  })
  createdBy: string | null;

  @Column("varchar", {
    name: "order_from",
    nullable: true,
    comment: "Sender ID, hexadecimal string",
    length: 255,
  })
  orderFrom: string | null;

  @Column("varchar", {
    name: "order_to",
    nullable: true,
    comment: "Receiver ID, hexadecimal string",
    length: 255,
  })
  orderTo: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    comment: "Order creation timestamp",
  })
  createdAt: Date | null;

  @Column("enum", {
    name: "created_method",
    nullable: true,
    comment: "Method used to create the order",
    enum: ["by_user", "by_admin", "by_referral", "by_api", "by_indiapp"],
  })
  createdMethod:
    | "by_user"
    | "by_admin"
    | "by_referral"
    | "by_api"
    | "by_indiapp"
    | null;

  @Column("datetime", {
    name: "finished_at",
    nullable: true,
    comment: "Order completion timestamp",
  })
  finishedAt: Date | null;

  @Column("enum", {
    name: "finished_method",
    nullable: true,
    comment: "Method used to complete the order",
    enum: ["direct", "escrow", "subscription", "manual"],
  })
  finishedMethod: "direct" | "escrow" | "subscription" | "manual" | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    comment: "Order update timestamp",
  })
  updatedAt: Date | null;

  @Column("enum", {
    name: "updated_method",
    nullable: true,
    comment: "Method used to update the order",
    enum: ["modified", "deleted"],
  })
  updatedMethod: "modified" | "deleted" | null;
}
