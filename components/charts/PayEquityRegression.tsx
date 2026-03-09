"use client";

import "./chartRegistry";
import { Bar } from "react-chartjs-2";

export default function PayEquityRegression({
  coefficients,
  gaps
}: {
  coefficients: { feature: string; value: number }[];
  gaps: { group: string; gap: number }[];
}) {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Regression Coefficients</h3>
        <Bar
          data={{
            labels: coefficients.map((c) => c.feature),
            datasets: [
              {
                label: "Coefficient",
                data: coefficients.map((c) => c.value),
                backgroundColor: coefficients.map((c) => (c.value < 0 ? "#b91c1c" : "#0f766e"))
              }
            ]
          }}
          options={{ responsive: true }}
        />
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Adjusted Pay Gap (%)</h3>
        <Bar
          data={{
            labels: gaps.map((g) => g.group),
            datasets: [
              {
                label: "Gap",
                data: gaps.map((g) => g.gap),
                backgroundColor: "#334155"
              }
            ]
          }}
          options={{ responsive: true }}
        />
      </div>
    </section>
  );
}
