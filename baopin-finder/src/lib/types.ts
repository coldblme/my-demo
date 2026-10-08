export type SalesSignal = "weak" | "mid" | "strong";
export type MarginGut = "low" | "ok" | "good";
export type CandidateStatus =
  | "pending"
  | "reviewing"
  | "follow"
  | "skip"
  | "followed";

export type Candidate = {
  id: number;
  url: string;
  title: string;
  category: string | null;
  price_yuan: number | null;
  sales_signal: SalesSignal | null;
  competition_1to5: number | null;
  fulfillment_risk_note: string | null;
  margin_gut: MarginGut | null;
  score_total: number | null;
  score_breakdown_json: string | null;
  status: CandidateStatus;
  skip_reason: string | null;
  notes: string | null;
  created_at: string;
  reviewed_at: string | null;
};

export type CreateCandidateInput = {
  url: string;
  title: string;
  category?: string;
  price_yuan?: number | null;
  sales_signal?: SalesSignal | null;
  competition_1to5?: number | null;
  fulfillment_risk_note?: string;
  margin_gut?: MarginGut | null;
  notes?: string;
};

export const SALES_SIGNAL_LABELS: Record<SalesSignal, string> = {
  weak: "弱",
  mid: "中",
  strong: "强",
};

export const MARGIN_GUT_LABELS: Record<MarginGut, string> = {
  low: "偏低",
  ok: "尚可",
  good: "较好",
};

export const STATUS_LABELS: Record<CandidateStatus, string> = {
  pending: "待评",
  reviewing: "日审中",
  follow: "可跟",
  skip: "不跟",
  followed: "已跟",
};
