import { Column, Entity } from "typeorm";

@Entity("balances", { schema: "web3wallet" })
export class Balances {
  @Column("varchar", { primary: true, name: "balances_id", length: 255 })
  balancesId: string;

  @Column("varchar", {
    name: "wallet_id",
    nullable: true,
    comment: "Associated wallet ID",
    length: 255,
  })
  walletId: string | null;

  @Column("float", {
    name: "balance_usd",
    nullable: true,
    comment: "USD balance - United States",
    precision: 12,
  })
  balanceUsd: number | null;

  @Column("float", {
    name: "balance_eur",
    nullable: true,
    comment: "EUR balance - Eurozone (19 countries)",
    precision: 12,
  })
  balanceEur: number | null;

  @Column("float", {
    name: "balance_jpy",
    nullable: true,
    comment: "JPY balance - Japan",
    precision: 12,
  })
  balanceJpy: number | null;

  @Column("float", {
    name: "balance_gbp",
    nullable: true,
    comment: "GBP balance - United Kingdom",
    precision: 12,
  })
  balanceGbp: number | null;

  @Column("float", {
    name: "balance_aud",
    nullable: true,
    comment: "AUD balance - Australia",
    precision: 12,
  })
  balanceAud: number | null;

  @Column("float", {
    name: "balance_cad",
    nullable: true,
    comment: "CAD balance - Canada",
    precision: 12,
  })
  balanceCad: number | null;

  @Column("float", {
    name: "balance_chf",
    nullable: true,
    comment: "CHF balance - Switzerland & Liechtenstein",
    precision: 12,
  })
  balanceChf: number | null;

  @Column("float", {
    name: "balance_cny",
    nullable: true,
    comment: "CNY balance - China",
    precision: 12,
  })
  balanceCny: number | null;

  @Column("float", {
    name: "balance_hkd",
    nullable: true,
    comment: "HKD balance - Hong Kong",
    precision: 12,
  })
  balanceHkd: number | null;

  @Column("float", {
    name: "balance_nzd",
    nullable: true,
    comment: "NZD balance - New Zealand",
    precision: 12,
  })
  balanceNzd: number | null;

  @Column("float", {
    name: "balance_krw",
    nullable: true,
    comment: "KRW balance - South Korea",
    precision: 12,
  })
  balanceKrw: number | null;

  @Column("float", {
    name: "balance_sgd",
    nullable: true,
    comment: "SGD balance - Singapore",
    precision: 12,
  })
  balanceSgd: number | null;

  @Column("float", {
    name: "balance_sek",
    nullable: true,
    comment: "SEK balance - Sweden",
    precision: 12,
  })
  balanceSek: number | null;

  @Column("float", {
    name: "balance_nok",
    nullable: true,
    comment: "NOK balance - Norway",
    precision: 12,
  })
  balanceNok: number | null;

  @Column("float", {
    name: "balance_mxn",
    nullable: true,
    comment: "MXN balance - Mexico",
    precision: 12,
  })
  balanceMxn: number | null;

  @Column("float", {
    name: "balance_inr",
    nullable: true,
    comment: "INR balance - India",
    precision: 12,
  })
  balanceInr: number | null;

  @Column("float", {
    name: "balance_rub",
    nullable: true,
    comment: "RUB balance - Russia",
    precision: 12,
  })
  balanceRub: number | null;

  @Column("float", {
    name: "balance_zar",
    nullable: true,
    comment: "ZAR balance - South Africa",
    precision: 12,
  })
  balanceZar: number | null;

  @Column("float", {
    name: "balance_brl",
    nullable: true,
    comment: "BRL balance - Brazil",
    precision: 12,
  })
  balanceBrl: number | null;

  @Column("float", {
    name: "balance_try",
    nullable: true,
    comment: "TRY balance - Turkey",
    precision: 12,
  })
  balanceTry: number | null;

  @Column("float", {
    name: "balance_twd",
    nullable: true,
    comment: "TWD balance - Taiwan",
    precision: 12,
  })
  balanceTwd: number | null;

  @Column("float", {
    name: "balance_dkk",
    nullable: true,
    comment: "DKK balance - Denmark",
    precision: 12,
  })
  balanceDkk: number | null;

  @Column("float", {
    name: "balance_pln",
    nullable: true,
    comment: "PLN balance - Poland",
    precision: 12,
  })
  balancePln: number | null;

  @Column("float", {
    name: "balance_thb",
    nullable: true,
    comment: "THB balance - Thailand",
    precision: 12,
  })
  balanceThb: number | null;

  @Column("float", {
    name: "balance_idr",
    nullable: true,
    comment: "IDR balance - Indonesia",
    precision: 12,
  })
  balanceIdr: number | null;

  @Column("float", {
    name: "balance_huf",
    nullable: true,
    comment: "HUF balance - Hungary",
    precision: 12,
  })
  balanceHuf: number | null;

  @Column("float", {
    name: "balance_czk",
    nullable: true,
    comment: "CZK balance - Czech Republic",
    precision: 12,
  })
  balanceCzk: number | null;

  @Column("float", {
    name: "balance_ils",
    nullable: true,
    comment: "ILS balance - Israel",
    precision: 12,
  })
  balanceIls: number | null;

  @Column("float", {
    name: "balance_myr",
    nullable: true,
    comment: "MYR balance - Malaysia",
    precision: 12,
  })
  balanceMyr: number | null;

  @Column("float", {
    name: "balance_php",
    nullable: true,
    comment: "PHP balance - Philippines",
    precision: 12,
  })
  balancePhp: number | null;

  @Column("float", {
    name: "balance_pkr",
    nullable: true,
    comment: "PKR balance - Pakistan",
    precision: 12,
  })
  balancePkr: number | null;

  @Column("float", {
    name: "balance_clp",
    nullable: true,
    comment: "CLP balance - Chile",
    precision: 12,
  })
  balanceClp: number | null;

  @Column("float", {
    name: "balance_aed",
    nullable: true,
    comment: "AED balance - United Arab Emirates",
    precision: 12,
  })
  balanceAed: number | null;

  @Column("float", {
    name: "balance_sar",
    nullable: true,
    comment: "SAR balance - Saudi Arabia",
    precision: 12,
  })
  balanceSar: number | null;

  @Column("float", {
    name: "balance_cop",
    nullable: true,
    comment: "COP balance - Colombia",
    precision: 12,
  })
  balanceCop: number | null;

  @Column("float", {
    name: "balance_egp",
    nullable: true,
    comment: "EGP balance - Egypt",
    precision: 12,
  })
  balanceEgp: number | null;

  @Column("float", {
    name: "balance_vnd",
    nullable: true,
    comment: "VND balance - Vietnam",
    precision: 12,
  })
  balanceVnd: number | null;

  @Column("float", {
    name: "balance_bdt",
    nullable: true,
    comment: "BDT balance - Bangladesh",
    precision: 12,
  })
  balanceBdt: number | null;

  @Column("float", {
    name: "balance_kwd",
    nullable: true,
    comment: "KWD balance - Kuwait",
    precision: 12,
  })
  balanceKwd: number | null;

  @Column("float", {
    name: "balance_qar",
    nullable: true,
    comment: "QAR balance - Qatar",
    precision: 12,
  })
  balanceQar: number | null;

  @Column("float", {
    name: "balance_uah",
    nullable: true,
    comment: "UAH balance - Ukraine",
    precision: 12,
  })
  balanceUah: number | null;

  @Column("float", {
    name: "balance_pen",
    nullable: true,
    comment: "PEN balance - Peru",
    precision: 12,
  })
  balancePen: number | null;

  @Column("float", {
    name: "balance_mad",
    nullable: true,
    comment: "MAD balance - Morocco",
    precision: 12,
  })
  balanceMad: number | null;

  @Column("float", {
    name: "balance_ngn",
    nullable: true,
    comment: "NGN balance - Nigeria",
    precision: 12,
  })
  balanceNgn: number | null;

  @Column("float", {
    name: "balance_kzt",
    nullable: true,
    comment: "KZT balance - Kazakhstan",
    precision: 12,
  })
  balanceKzt: number | null;

  @Column("float", {
    name: "balance_ars",
    nullable: true,
    comment: "ARS balance - Argentina",
    precision: 12,
  })
  balanceArs: number | null;

  @Column("float", {
    name: "balance_dzd",
    nullable: true,
    comment: "DZD balance - Algeria",
    precision: 12,
  })
  balanceDzd: number | null;

  @Column("float", {
    name: "balance_lkr",
    nullable: true,
    comment: "LKR balance - Sri Lanka",
    precision: 12,
  })
  balanceLkr: number | null;

  @Column("float", {
    name: "balance_omr",
    nullable: true,
    comment: "OMR balance - Oman",
    precision: 12,
  })
  balanceOmr: number | null;

  @Column("float", {
    name: "balance_bhd",
    nullable: true,
    comment: "BHD balance - Bahrain",
    precision: 12,
  })
  balanceBhd: number | null;

  @Column("float", {
    name: "balance_etb",
    nullable: true,
    comment: "ETB balance - Ethiopia",
    precision: 12,
  })
  balanceEtb: number | null;

  @Column("float", {
    name: "balance_cdf",
    nullable: true,
    comment: "CDF balance - Democratic Republic of the Congo",
    precision: 12,
  })
  balanceCdf: number | null;

  @Column("float", {
    name: "balance_mmk",
    nullable: true,
    comment: "MMK balance - Myanmar",
    precision: 12,
  })
  balanceMmk: number | null;

  @Column("float", {
    name: "balance_kes",
    nullable: true,
    comment: "KES balance - Kenya",
    precision: 12,
  })
  balanceKes: number | null;

  @Column("float", {
    name: "balance_ghs",
    nullable: true,
    comment: "GHS balance - Ghana",
    precision: 12,
  })
  balanceGhs: number | null;

  @Column("float", {
    name: "balance_npr",
    nullable: true,
    comment: "NPR balance - Nepal",
    precision: 12,
  })
  balanceNpr: number | null;

  @Column("float", {
    name: "balance_ves",
    nullable: true,
    comment: "VES balance - Venezuela",
    precision: 12,
  })
  balanceVes: number | null;

  @Column("float", {
    name: "balance_iqd",
    nullable: true,
    comment: "IQD balance - Iraq",
    precision: 12,
  })
  balanceIqd: number | null;

  @Column("float", {
    name: "balance_tzs",
    nullable: true,
    comment: "TZS balance - Tanzania",
    precision: 12,
  })
  balanceTzs: number | null;

  @Column("float", {
    name: "balance_coupon",
    nullable: true,
    comment: "Coupon balance, can be used to offset platform fees",
    precision: 12,
  })
  balanceCoupon: number | null;
}
