import Link from "next/link";
import { listCandidates } from "@/lib/candidates";
import {
  MARGIN_GUT_LABELS,
  SALES_SIGNAL_LABELS,
  STATUS_LABELS,
  type Candidate,
  type MarginGut,
  type SalesSignal,
} from "@/lib/types";

export const dynamic = "force-dynamic";

function formatPrice(value: number | null): string {
  if (value == null) return "—";
  return `¥${value.toFixed(value % 1 === 0 ? 0 : 2)}`;
}

function signalLabel(value: SalesSignal | null): string {
  if (!value) return "—";
  return SALES_SIGNAL_LABELS[value];
}

function marginLabel(value: MarginGut | null): string {
  if (!value) return "—";
  return MARGIN_GUT_LABELS[value];
}

function CandidateTable({ rows }: { rows: Candidate[] }) {
  if (rows.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card px-6 py-12 text-center">
        <p className="text-sm text-muted">还没有候选。先录入一条吧。</p>
        <Link
          href="/new"
          className="mt-4 inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover"
        >
          新建候选
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-table-head text-muted">
          <tr>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">录入时间</th>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">标题</th>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">类目</th>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">到手价</th>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">信号</th>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">竞争</th>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">毛利直觉</th>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">状态</th>
            <th className="whitespace-nowrap px-3 py-2.5 font-medium">链接</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-border align-top">
              <td className="whitespace-nowrap px-3 py-2.5 text-muted">
                {row.created_at}
              </td>
              <td className="max-w-[220px] px-3 py-2.5 font-medium">
                <span className="line-clamp-2">{row.title}</span>
              </td>
              <td className="whitespace-nowrap px-3 py-2.5">
                {row.category || "—"}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5">
                {formatPrice(row.price_yuan)}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5">
                {signalLabel(row.sales_signal)}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5">
                {row.competition_1to5 ?? "—"}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5">
                {marginLabel(row.margin_gut)}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5">
                {STATUS_LABELS[row.status]}
              </td>
              <td className="px-3 py-2.5">
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  打开
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HomePage() {
  const rows = listCandidates();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">候选列表</h1>
          <p className="mt-1 text-sm text-muted">
            按录入时间倒序 · 共 {rows.length} 条
          </p>
        </div>
        <Link
          href="/new"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover"
        >
          新建候选
        </Link>
      </div>
      <CandidateTable rows={rows} />
    </div>
  );
}
