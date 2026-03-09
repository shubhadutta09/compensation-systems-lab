const essays = [
  ["AI assisted compensation planning", "AI systems can generate explainable scenario options while preserving governance controls."],
  ["Dynamic compensation systems", "Compensation structures should adjust continuously rather than once per annual cycle."],
  ["Real-time labor market pricing", "Role pricing can update using job market telemetry, hiring velocity, and scarcity signals."],
  ["Personalized rewards", "Employees increasingly expect configurable bundles tailored to life stage and motivation profile."],
  ["Compensation transparency", "Transparency norms require stronger logic, clearer communication, and bias monitoring."]
] as const;

export default function FutureCompensationSystemsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl">Future of Compensation Systems</h1>
      {essays.map(([title, body]) => (
        <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl">{title}</h2>
          <p className="mt-2 text-slate-700">{body}</p>
        </article>
      ))}
    </div>
  );
}
