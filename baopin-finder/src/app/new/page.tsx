import { CandidateForm } from "@/components/CandidateForm";

export default function NewCandidatePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">新建候选</h1>
        <p className="mt-1 text-sm text-muted">
          从拼多多商品页粘贴链接并填写观察字段。评分与跟/不跟将在后续切片实现。
        </p>
      </div>
      <CandidateForm />
    </div>
  );
}
