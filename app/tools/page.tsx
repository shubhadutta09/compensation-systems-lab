import Link from "next/link";

export default function ToolsIndexPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl">Interactive Tools</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <Link href="/tools/compensation-simulator" className="rounded-2xl border border-slate-200 bg-white p-5">
          Compensation Package Simulator
        </Link>
        <Link href="/tools/ai-compensation-advisor" className="rounded-2xl border border-slate-200 bg-white p-5">
          AI Compensation Advisor
        </Link>
        <Link href="/tools/compensation-budget-simulator" className="rounded-2xl border border-slate-200 bg-white p-5">
          Compensation Budget Simulator
        </Link>
      </div>
    </div>
  );
}
