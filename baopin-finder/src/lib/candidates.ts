import { getDb } from "./db";
import type { Candidate, CreateCandidateInput } from "./types";

export function listCandidates(): Candidate[] {
  const db = getDb();
  return db
    .prepare(
      `SELECT * FROM candidates ORDER BY datetime(created_at) DESC, id DESC`,
    )
    .all() as Candidate[];
}

export function createCandidate(input: CreateCandidateInput): Candidate {
  const db = getDb();
  const url = input.url.trim();
  const title = input.title.trim();

  if (!url) {
    throw new Error("商品链接不能为空");
  }
  if (!title) {
    throw new Error("标题不能为空");
  }

  const result = db
    .prepare(
      `INSERT INTO candidates (
        url, title, category, price_yuan, sales_signal,
        competition_1to5, fulfillment_risk_note, margin_gut, notes, status
      ) VALUES (
        @url, @title, @category, @price_yuan, @sales_signal,
        @competition_1to5, @fulfillment_risk_note, @margin_gut, @notes, 'pending'
      )`,
    )
    .run({
      url,
      title,
      category: input.category?.trim() || null,
      price_yuan:
        input.price_yuan === undefined || input.price_yuan === null
          ? null
          : Number(input.price_yuan),
      sales_signal: input.sales_signal || null,
      competition_1to5:
        input.competition_1to5 === undefined || input.competition_1to5 === null
          ? null
          : Number(input.competition_1to5),
      fulfillment_risk_note: input.fulfillment_risk_note?.trim() || null,
      margin_gut: input.margin_gut || null,
      notes: input.notes?.trim() || null,
    });

  const row = db
    .prepare(`SELECT * FROM candidates WHERE id = ?`)
    .get(result.lastInsertRowid) as Candidate;

  return row;
}
