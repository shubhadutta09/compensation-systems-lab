import { researchRepository } from "@/lib/mockData";

export default function ResearchRepositoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Research Repository</h1>
      <p className="lead">Curated research library across compensation and labor systems.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {researchRepository.map((entry) => (
          <article key={entry.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs uppercase tracking-wide text-slate-500">{entry.category}</p>
            <h2 className="mt-2 text-2xl">{entry.title}</h2>
            <p className="mt-1 text-slate-600">{entry.authors}</p>
            <p className="mt-3 text-slate-700">{entry.summary}</p>
            <p className="mt-3 text-sm text-slate-800">
              <span className="font-semibold">Key insight:</span> {entry.insight}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
