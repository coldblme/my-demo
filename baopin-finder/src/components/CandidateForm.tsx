"use client";

import { useActionState } from "react";
import {
  createCandidateAction,
  type ActionState,
} from "@/app/actions";

const initialState: ActionState = {};

export function CandidateForm() {
  const [state, formAction, pending] = useActionState(
    createCandidateAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-5 rounded-lg border border-border bg-card p-5 shadow-sm">
      {state.error ? (
        <p className="rounded-md border border-danger/30 bg-red-50 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium">
            商品链接 <span className="text-danger">*</span>
          </span>
          <input
            name="url"
            type="url"
            required
            placeholder="https://mobile.yangkeduo.com/..."
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>

        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium">
            标题 <span className="text-danger">*</span>
          </span>
          <input
            name="title"
            type="text"
            required
            placeholder="商品标题"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium">类目</span>
          <input
            name="category"
            type="text"
            placeholder="如：收纳 / 厨房 / 家居"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium">到手价（元）</span>
          <input
            name="price_yuan"
            type="number"
            min="0"
            step="0.01"
            placeholder="例如 19.9"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium">销量/需求信号</span>
          <select
            name="sales_signal"
            defaultValue=""
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          >
            <option value="">未填</option>
            <option value="weak">弱</option>
            <option value="mid">中</option>
            <option value="strong">强</option>
          </select>
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium">竞争感（1–5）</span>
          <select
            name="competition_1to5"
            defaultValue=""
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          >
            <option value="">未填</option>
            <option value="1">1 · 很少同款</option>
            <option value="2">2</option>
            <option value="3">3 · 一般</option>
            <option value="4">4</option>
            <option value="5">5 · 同款很多/头部强</option>
          </select>
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium">粗毛利直觉</span>
          <select
            name="margin_gut"
            defaultValue=""
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          >
            <option value="">未填</option>
            <option value="low">偏低</option>
            <option value="ok">尚可</option>
            <option value="good">较好</option>
          </select>
        </label>

        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium">履约/售后风险备注</span>
          <textarea
            name="fulfillment_risk_note"
            rows={2}
            placeholder="破损、体大运费、差评雷点等"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>

        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium">其他备注</span>
          <textarea
            name="notes"
            rows={2}
            placeholder="可选"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover disabled:opacity-60 transition-colors"
        >
          {pending ? "保存中…" : "保存候选"}
        </button>
        <a href="/" className="text-sm text-muted hover:text-foreground">
          取消
        </a>
      </div>
    </form>
  );
}
