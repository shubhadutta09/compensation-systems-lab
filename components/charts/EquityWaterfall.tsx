"use client";

import "./chartRegistry";
import { Bar } from "react-chartjs-2";

export default function EquityWaterfall({ data }: { data: { category: string; value: number }[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Equity Waterfall Chart</h3>
      <Bar
        data={{
          labels: data.map((d) => d.category),
          datasets: [
            {
              label: "Ownership (%)",
              data: data.map((d) => d.value),
              backgroundColor: ["#0f766e", "#155e75", "#1d4ed8", "#ca8a04", "#9333ea"]
            }
          ]
        }}
        options={{ responsive: true }}
      />
    </div>
  );
}
