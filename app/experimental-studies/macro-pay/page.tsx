"use client";

import "@/components/charts/chartRegistry";
import { Line } from "react-chartjs-2";
import { macroSeries } from "@/lib/mockData";

export default function MacroPayPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Macro Economics and Individual Pay</h1>
      <p className="lead">Inflation, unemployment, and tech funding cycles versus wage growth.</p>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <Line
          data={{
            labels: macroSeries.map((d) => d.year),
            datasets: [
              { label: "Inflation", data: macroSeries.map((d) => d.inflation), borderColor: "#dc2626" },
              { label: "Unemployment", data: macroSeries.map((d) => d.unemployment), borderColor: "#0f766e" },
              { label: "Tech funding index", data: macroSeries.map((d) => d.funding), borderColor: "#334155" },
              { label: "Wage growth", data: macroSeries.map((d) => d.wageGrowth), borderColor: "#f59e0b" }
            ]
          }}
          options={{ responsive: true }}
        />
      </div>
    </div>
  );
}
