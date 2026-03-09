"use client";

import laborData from "@/data/labor_market_data.json";
import "@/components/charts/chartRegistry";
import { Scatter } from "react-chartjs-2";
import LaborMarketHeatmap from "@/components/charts/LaborMarketHeatmap";
import { laborHeatmap } from "@/lib/mockData";

export default function LaborMarketIntelligencePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Labor Market Intelligence</h1>
      <p className="lead">Research question: How should organizations price roles when talent supply fluctuates?</p>
      <p className="text-slate-700">Framework: Labor supply-demand economics.</p>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Supply-Demand Scatterplot</h3>
        <Scatter
          data={{
            datasets: [
              {
                label: "Roles",
                data: laborData.map((d) => ({ x: d.supply, y: d.demand })),
                pointRadius: 6,
                pointBackgroundColor: "#0f766e"
              }
            ]
          }}
          options={{
            responsive: true,
            scales: {
              x: { title: { display: true, text: "Supply" } },
              y: { title: { display: true, text: "Demand" } }
            }
          }}
        />
      </div>

      <LaborMarketHeatmap data={laborHeatmap} />
    </div>
  );
}
