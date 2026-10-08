"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createCandidate } from "@/lib/candidates";
import type { MarginGut, SalesSignal } from "@/lib/types";

function emptyToNull(value: FormDataEntryValue | null): string | null {
  if (value == null) return null;
  const s = String(value).trim();
  return s === "" ? null : s;
}

export type ActionState = {
  error?: string;
};

export async function createCandidateAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    const url = String(formData.get("url") ?? "").trim();
    const title = String(formData.get("title") ?? "").trim();
    const category = emptyToNull(formData.get("category")) ?? undefined;
    const priceRaw = emptyToNull(formData.get("price_yuan"));
    const salesSignal = emptyToNull(
      formData.get("sales_signal"),
    ) as SalesSignal | null;
    const competitionRaw = emptyToNull(formData.get("competition_1to5"));
    const fulfillmentRiskNote =
      emptyToNull(formData.get("fulfillment_risk_note")) ?? undefined;
    const marginGut = emptyToNull(formData.get("margin_gut")) as MarginGut | null;
    const notes = emptyToNull(formData.get("notes")) ?? undefined;

    createCandidate({
      url,
      title,
      category,
      price_yuan: priceRaw == null ? null : Number(priceRaw),
      sales_signal: salesSignal,
      competition_1to5:
        competitionRaw == null ? null : Number(competitionRaw),
      fulfillment_risk_note: fulfillmentRiskNote,
      margin_gut: marginGut,
      notes,
    });
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : "保存失败，请重试",
    };
  }

  revalidatePath("/");
  redirect("/");
}
