"use client";

import { FormEvent, useState } from "react";
import "@/components/charts/chartRegistry";
import { Bar, Line } from "react-chartjs-2";

type BudgetResponse = {
  expectedBudget: number;
  p10: number;
  p50: number;
  p90: number;
  histogram: { bucket: string; count: number }[];
};

export default function CompensationBudgetSimulatorPage() {
  const [inputs, setInputs] = useState({
    headcountGrowth: "12",
    promotionRate: "8",
    meritBudget: "4.5",
    equityRefreshRate: "25"
  });
  const [result, setResult] = useState<BudgetResponse | null>(null);

  async function runSimulation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/budget-simulation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        headcountGrowth: Number(inputs.headcountGrowth),
        promotionRate: Number(inputs.promotionRate),
        meritIncreaseBudget: Number(inputs.meritBudget),
        equityRefreshRate: Number(inputs.equityRefreshRate),
        iterations: 1000
      })
    });
    setResult((await response.json()) as BudgetResponse);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Compensation Budget Simulator</h1>
      <p className="lead">Monte Carlo simulation with 1000 iterations for compensation budget scenarios.</p>

      <form onSubmit={runSimulation} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-2">
        <label className="text-sm">
          Headcount growth (%)
          <input
            className="mt-1 w-full rounded border p-2"
            value={inputs.headcountGrowth}
            onChange={(e) => setInputs((prev) => ({ ...prev, headcountGrowth: e.target.value }))}
          />
        </label>
        <label className="text-sm">
          Promotion rate (%)
          <input
            className="mt-1 w-full rounded border p-2"
            value={inputs.promotionRate}
            onChange={(e) => setInputs((prev) => ({ ...prev, promotionRate: e.target.value }))}
          />
        </label>
        <label className="text-sm">
          Merit increase budget (%)
          <input
            className="mt-1 w-full rounded border p-2"
            value={inputs.meritBudget}
            onChange={(e) => setInputs((prev) => ({ ...prev, meritBudget: e.target.value }))}
          />
        </label>
        <label className="text-sm">
          Equity refresh rate (%)
          <input
            className="mt-1 w-full rounded border p-2"
            value={inputs.equityRefreshRate}
            onChange={(e) => setInputs((prev) => ({ ...prev, equityRefreshRate: e.target.value }))}
          />
        </label>
        <button type="submit" className="w-fit rounded-full bg-slate-900 px-4 py-2 text-sm text-white">
          Run 1000 Simulations
        </button>
      </form>

      {result ? (
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">Expected budget: ${Math.round(result.expectedBudget).toLocaleString()}</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">P10: ${Math.round(result.p10).toLocaleString()}</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">P50: ${Math.round(result.p50).toLocaleString()}</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">P90: ${Math.round(result.p90).toLocaleString()}</div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Distribution Histogram</h3>
              <Bar
                data={{
                  labels: result.histogram.map((h) => h.bucket),
                  datasets: [{ label: "Count", data: result.histogram.map((h) => h.count), backgroundColor: "#0f766e" }]
                }}
              />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Confidence Interval Chart</h3>
              <Line
                data={{
                  labels: ["P10", "P50", "P90"],
                  datasets: [
                    {
                      label: "Budget",
                      data: [result.p10, result.p50, result.p90],
                      borderColor: "#1d4ed8"
                    }
                  ]
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
