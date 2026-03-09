const methods = [
  ["Behavioral science", "Examines motivation, fairness, and social comparisons in compensation systems."],
  ["Labor economics", "Models market pressure, scarcity, and wage formation under supply-demand dynamics."],
  ["Regression modeling", "Estimates controlled effects of performance, role, level, tenure, and location on pay."],
  ["Simulation", "Uses scenario testing and Monte Carlo methods for compensation and budget planning."],
  ["Data visualization", "Builds interpretable dashboards for transparent decisions and policy communication."],
  ["Machine learning", "Supports forecasting of retention risk, benchmark drift, and compensation interventions."]
] as const;

export default function MethodsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Methods</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {methods.map(([name, description]) => (
          <article key={name} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl">{name}</h2>
            <p className="mt-2 text-slate-700">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
