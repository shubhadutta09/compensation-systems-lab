"use client";

import "./chartRegistry";
import { Bar, Scatter } from "react-chartjs-2";

export default function PreferenceClusters({
  clusters,
  scatter
}: {
  clusters: { name: string; salary: number; equity: number; pto: number; learning: number }[];
  scatter: { x: number; y: number }[];
}) {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Employee Preference Clusters</h3>
        <Bar
          data={{
            labels: clusters.map((c) => c.name),
            datasets: [
              { label: "Salary", data: clusters.map((c) => c.salary), backgroundColor: "#0f766e" },
              { label: "Equity", data: clusters.map((c) => c.equity), backgroundColor: "#334155" },
              { label: "PTO", data: clusters.map((c) => c.pto), backgroundColor: "#0ea5e9" },
              { label: "Learning", data: clusters.map((c) => c.learning), backgroundColor: "#f59e0b" }
            ]
          }}
          options={{ responsive: true }}
        />
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Equity vs Salary Preferences</h3>
        <Scatter
          data={{
            datasets: [
              {
                label: "Preference Points",
                data: scatter,
                pointBackgroundColor: "#7c3aed",
                pointRadius: 5
              }
            ]
          }}
          options={{
            responsive: true,
            scales: {
              x: { title: { display: true, text: "Salary Weight" } },
              y: { title: { display: true, text: "Equity Weight" } }
            }
          }}
        />
      </div>
    </section>
  );
}
