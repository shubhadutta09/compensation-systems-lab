"use client";

import { FormEvent, useState } from "react";

type AdvisorResponse = {
  recommendation: {
    salaryAdjustment: string;
    equityRefreshGrant: string;
    bonusAdjustment: string;
  };
  explanation: string;
  confidenceScore: number;
};

export default function AICompensationAdvisorPage() {
  const [form, setForm] = useState({
    role: "ML Engineer",
    level: "L4",
    performanceRating: "4",
    marketBenchmark: "185000",
    retentionRisk: "65",
    location: "San Francisco"
  });
  const [result, setResult] = useState<AdvisorResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/comp-recommendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          performanceRating: Number(form.performanceRating),
          marketBenchmark: Number(form.marketBenchmark),
          retentionRisk: Number(form.retentionRisk)
        })
      });
      const payload = (await response.json()) as AdvisorResponse;
      setResult(payload);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-4xl">AI Compensation Advisor</h1>
        <span className="brand-chip rounded-full px-3 py-1 text-xs font-semibold">OpenAI-Powered Demo</span>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5">
          <div className="grid gap-3">
            {[
              ["role", "Role"],
              ["level", "Level"],
              ["performanceRating", "Performance Rating"],
              ["marketBenchmark", "Market Benchmark"],
              ["retentionRisk", "Retention Risk"],
              ["location", "Location"]
            ].map(([key, label]) => (
              <label key={key} className="text-sm">
                <span className="mb-1 block text-slate-700">{label}</span>
                <input
                  className="w-full rounded border border-slate-300 p-2"
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                />
              </label>
            ))}
          </div>
          <button
            className="mt-4 rounded-full bg-gradient-to-r from-cyan-700 to-blue-700 px-4 py-2 text-sm font-semibold text-white"
            type="submit"
          >
            {loading ? "Running..." : "Generate Recommendation"}
          </button>
        </form>

        <div className="glass-card rounded-2xl p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Recommendation</h3>
          {result ? (
            <div className="mt-3 space-y-3 text-slate-700">
              <p>
                <span className="font-semibold">Salary adjustment:</span> {result.recommendation.salaryAdjustment}
              </p>
              <p>
                <span className="font-semibold">Equity refresh grant:</span> {result.recommendation.equityRefreshGrant}
              </p>
              <p>
                <span className="font-semibold">Bonus adjustment:</span> {result.recommendation.bonusAdjustment}
              </p>
              <p>
                <span className="font-semibold">AI explanation:</span> {result.explanation}
              </p>
              <p>
                <span className="font-semibold">Confidence score:</span> {Math.round(result.confidenceScore * 100)}%
              </p>
            </div>
          ) : (
            <p className="mt-3 text-slate-600">Submit the form to generate AI recommendations.</p>
          )}
        </div>
      </div>
    </div>
  );
}
