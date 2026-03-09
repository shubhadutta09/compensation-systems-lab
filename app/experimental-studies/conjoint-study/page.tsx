"use client";

import "@/components/charts/chartRegistry";
import { Bar } from "react-chartjs-2";
import { conjointImportance } from "@/lib/mockData";

export default function ConjointStudyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Conjoint Study of Compensation Preferences</h1>
      <p className="lead">Attributes: Salary, equity, benefits, company brand, and learning opportunities.</p>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Attribute Importance Chart</h3>
        <Bar
          data={{
            labels: conjointImportance.map((d) => d.label),
            datasets: [
              {
                label: "Importance",
                data: conjointImportance.map((d) => d.value),
                backgroundColor: "#0f766e"
              }
            ]
          }}
          options={{ responsive: true }}
        />
      </div>
    </div>
  );
}
