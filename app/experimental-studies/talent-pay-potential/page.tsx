"use client";

import "@/components/charts/chartRegistry";
import { Bar } from "react-chartjs-2";
import { talentPayMatrix } from "@/lib/mockData";

export default function TalentPayPotentialPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Talent Potential vs Pay Potential</h1>
      <p className="lead">2x2 matrix of potential and compensation growth.</p>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <Bar
          data={{
            labels: talentPayMatrix.map((d) => d.bucket),
            datasets: [
              {
                label: "Population",
                data: talentPayMatrix.map((d) => d.count),
                backgroundColor: ["#0f766e", "#1d4ed8", "#f59e0b", "#334155"]
              }
            ]
          }}
        />
      </div>
    </div>
  );
}
