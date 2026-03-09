"use client";

import "@/components/charts/chartRegistry";
import { Bar, Line } from "react-chartjs-2";
import PerformancePayScatter from "@/components/charts/PerformancePayScatter";
import { payCompression } from "@/lib/mockData";

const points = [
  { x: 95, y: 9.5 },
  { x: 88, y: 7.2 },
  { x: 75, y: 5.1 },
  { x: 62, y: 3.8 },
  { x: 50, y: 3.0 },
  { x: 40, y: 2.2 },
  { x: 30, y: 1.8 },
  { x: 20, y: 1.2 }
];

export default function PerformancePayPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Performance and Pay</h1>
      <p className="lead">Research question: How strongly does compensation reflect performance?</p>
      <p className="text-slate-700">Method: Regression analysis linking performance ratings to compensation increases.</p>
      <PerformancePayScatter points={points} />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Pay Compression Index</h3>
          <Line
            data={{
              labels: payCompression.map((d) => d.quarter),
              datasets: [
                {
                  label: "Compression Index",
                  data: payCompression.map((d) => d.value),
                  borderColor: "#0f766e",
                  backgroundColor: "rgba(15,118,110,0.2)",
                  fill: true,
                  tension: 0.3
                }
              ]
            }}
            options={{ responsive: true }}
          />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Regression Fit Overview</h3>
          <Bar
            data={{
              labels: ["Performance coefficient", "Intercept", "R² (x100)", "Residual variance (x10)"],
              datasets: [
                {
                  label: "Model summary",
                  data: [0.11, 0.9, 78, 4.4],
                  backgroundColor: "#334155"
                }
              ]
            }}
            options={{ responsive: true }}
          />
        </div>
      </div>
    </div>
  );
}
