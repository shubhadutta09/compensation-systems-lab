"use client";

import { useMemo, useState } from "react";
import laborData from "@/data/labor_market_data.json";
import "@/components/charts/chartRegistry";
import { Line, Scatter } from "react-chartjs-2";
import LaborMarketHeatmap from "@/components/charts/LaborMarketHeatmap";

const heatmap = [
  { role: "ML Engineer", dimension: "Modeling", value: 0.92 },
  { role: "ML Engineer", dimension: "MLOps", value: 0.84 },
  { role: "AI Researcher", dimension: "Research", value: 0.98 },
  { role: "AI Researcher", dimension: "Modeling", value: 0.95 },
  { role: "Product Manager", dimension: "Strategy", value: 0.56 },
  { role: "Product Manager", dimension: "Execution", value: 0.51 },
  { role: "Data Analyst", dimension: "SQL", value: 0.35 },
  { role: "Data Analyst", dimension: "BI", value: 0.31 }
];

const salaryTrend = [
  { month: "Jan", ML_Engineer: 182000, AI_Researcher: 208000, Product_Manager: 163000, Data_Analyst: 114000 },
  { month: "Feb", ML_Engineer: 183000, AI_Researcher: 209000, Product_Manager: 164000, Data_Analyst: 114500 },
  { month: "Mar", ML_Engineer: 184000, AI_Researcher: 210000, Product_Manager: 165000, Data_Analyst: 115000 },
  { month: "Apr", ML_Engineer: 185000, AI_Researcher: 211000, Product_Manager: 166000, Data_Analyst: 115500 },
  { month: "May", ML_Engineer: 186000, AI_Researcher: 212000, Product_Manager: 167000, Data_Analyst: 116000 }
];

export default function LaborMarketDashboardPage() {
  const [role, setRole] = useState("All");
  const [location, setLocation] = useState("All");
  const [industry, setIndustry] = useState("All");

  const filtered = useMemo(
    () =>
      laborData.filter(
        (d) =>
          (role === "All" || d.role === role) &&
          (location === "All" || d.location === location) &&
          (industry === "All" || d.industry === industry)
      ),
    [role, location, industry]
  );

  const roles = ["All", ...Array.from(new Set(laborData.map((d) => d.role)))];
  const locations = ["All", ...Array.from(new Set(laborData.map((d) => d.location)))];
  const industries = ["All", ...Array.from(new Set(laborData.map((d) => d.industry)))];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Labor Market Dashboard</h1>
      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-3">
        <label className="text-sm">
          Role
          <select className="mt-1 w-full rounded border p-2" value={role} onChange={(e) => setRole(e.target.value)}>
            {roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          Location
          <select className="mt-1 w-full rounded border p-2" value={location} onChange={(e) => setLocation(e.target.value)}>
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          Industry
          <select className="mt-1 w-full rounded border p-2" value={industry} onChange={(e) => setIndustry(e.target.value)}>
            {industries.map((ind) => (
              <option key={ind}>{ind}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Supply vs Demand Scatterplot</h3>
          <Scatter
            data={{
              datasets: [
                {
                  label: "Roles",
                  data: filtered.map((d) => ({ x: d.supply, y: d.demand })),
                  pointBackgroundColor: "#0f766e",
                  pointRadius: 7
                }
              ]
            }}
            options={{ scales: { x: { title: { display: true, text: "Supply" } }, y: { title: { display: true, text: "Demand" } } } }}
          />
        </div>

        <LaborMarketHeatmap data={heatmap} />

        <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Salary Trends Over Time</h3>
          <Line
            data={{
              labels: salaryTrend.map((d) => d.month),
              datasets: [
                { label: "ML Engineer", data: salaryTrend.map((d) => d.ML_Engineer), borderColor: "#0f766e" },
                { label: "AI Researcher", data: salaryTrend.map((d) => d.AI_Researcher), borderColor: "#1d4ed8" },
                { label: "Product Manager", data: salaryTrend.map((d) => d.Product_Manager), borderColor: "#f59e0b" },
                { label: "Data Analyst", data: salaryTrend.map((d) => d.Data_Analyst), borderColor: "#334155" }
              ]
            }}
          />
        </div>
      </div>
    </div>
  );
}
