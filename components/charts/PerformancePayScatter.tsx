"use client";

import "./chartRegistry";
import { Scatter } from "react-chartjs-2";

export default function PerformancePayScatter({ points }: { points: { x: number; y: number }[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
        Performance Percentile vs Pay Increase
      </h3>
      <Scatter
        data={{
          datasets: [
            {
              label: "Employees",
              data: points,
              pointBackgroundColor: "#0f766e",
              pointRadius: 5
            }
          ]
        }}
        options={{
          responsive: true,
          scales: {
            x: { title: { display: true, text: "Performance Percentile" } },
            y: { title: { display: true, text: "Pay Increase %" } }
          }
        }}
      />
    </div>
  );
}
