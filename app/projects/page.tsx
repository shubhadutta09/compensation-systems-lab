import Link from "next/link";

const projects = [
  ["The Psychology of Compensation", "/projects/psychology-compensation"],
  ["Performance and Pay", "/projects/performance-pay"],
  ["Labor Market Intelligence", "/projects/labor-market-intelligence"],
  ["Pay Equity Analytics", "/projects/pay-equity"],
  ["Equity Distribution and Ownership", "/projects/equity-waterfall"]
] as const;

export default function ProjectsIndexPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl">Projects</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {projects.map(([name, href]) => (
          <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800">
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
