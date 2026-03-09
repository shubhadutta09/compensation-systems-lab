import Link from "next/link";

const studies = [
  ["Conjoint Study of Compensation Preferences", "/experimental-studies/conjoint-study"],
  ["Talent Potential vs Pay Potential", "/experimental-studies/talent-pay-potential"],
  ["Pay Pathing", "/experimental-studies/pay-pathing"],
  ["Macro Economics and Individual Pay", "/experimental-studies/macro-pay"]
] as const;

export default function ExperimentalStudiesIndexPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl">Experimental Studies</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {studies.map(([name, href]) => (
          <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800">
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
