"use client";

import "@/components/charts/chartRegistry";
import { Line } from "react-chartjs-2";
import { payPathing } from "@/lib/mockData";

export default function PayPathingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Pay Pathing</h1>
      <p className="lead">Compensation trajectories across individual contributor, management, and technical expert tracks.</p>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <Line
          data={{
            labels: payPathing.map((d) => d.year),
            datasets: [
              {
                label: "Individual contributor",
                data: payPathing.map((d) => d.ic),
                borderColor: "#0f766e"
              },
              {
                label: "Management",
                data: payPathing.map((d) => d.mgmt),
                borderColor: "#1d4ed8"
              },
              {
                label: "Technical expert",
                data: payPathing.map((d) => d.tech),
                borderColor: "#f59e0b"
              }
            ]
          }}
          options={{ responsive: true }}
        />
      </div>
    </div>
  );
}
