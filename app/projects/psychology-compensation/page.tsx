import PreferenceClusters from "@/components/charts/PreferenceClusters";
import { equitySalaryPoints, preferenceClusters } from "@/lib/mockData";

function ChoiceArchitectureDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Total Rewards Choice Architecture</h3>
      <div className="grid gap-3 md:grid-cols-5">
        {[
          "Higher salary / lower equity",
          "Balanced salary and equity",
          "Lower salary / higher equity",
          "Additional PTO",
          "Learning budget"
        ].map((bundle) => (
          <div key={bundle} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {bundle}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PsychologyCompensationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">The Psychology of Compensation</h1>
      <p className="lead max-w-4xl">
        Research question: Why does the same compensation package motivate different employees differently?
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl">Framework</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Organizational justice</li>
          <li>Distributive justice</li>
          <li>Procedural justice</li>
          <li>Interactional justice</li>
        </ul>
      </div>
      <PreferenceClusters clusters={preferenceClusters} scatter={equitySalaryPoints} />
      <ChoiceArchitectureDiagram />
    </div>
  );
}
