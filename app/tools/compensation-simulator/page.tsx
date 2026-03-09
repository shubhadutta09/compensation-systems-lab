"use client";

import { useMemo, useState } from "react";
import "@/components/charts/chartRegistry";
import { Line, Pie } from "react-chartjs-2";
import SliderInput from "@/components/ui/SliderInput";

export default function CompensationSimulatorPage() {
  const [salary, setSalary] = useState(160000);
  const [equity, setEquity] = useState(50000);
  const [bonus, setBonus] = useState(18000);
  const [benefits, setBenefits] = useState(15000);
  const [pto, setPto] = useState(20);

  const outputs = useMemo(() => {
    const total = salary + equity + bonus + benefits;
    const projectedEquity = Math.round(equity * 1.7);
    const risk = Math.min(100, Math.round((equity / total) * 160 + 15));
    const motivation = Math.min(100, Math.round((salary / 2500 + bonus / 900 + pto * 1.1 + benefits / 1000) / 2));
    return { total, projectedEquity, risk, motivation };
  }, [salary, equity, bonus, benefits, pto]);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Compensation Package Simulator</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="space-y-3">
            <SliderInput label="Salary" value={salary} min={80000} max={300000} step={5000} onChange={setSalary} />
            <SliderInput label="Equity" value={equity} min={0} max={250000} step={2500} onChange={setEquity} />
            <SliderInput label="Bonus" value={bonus} min={0} max={80000} step={1000} onChange={setBonus} />
            <SliderInput label="Benefits" value={benefits} min={4000} max={50000} step={1000} onChange={setBenefits} />
            <SliderInput label="PTO" value={pto} min={10} max={40} onChange={setPto} />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase text-slate-500">Total Compensation</p>
            <p className="text-3xl font-semibold">${outputs.total.toLocaleString()}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase text-slate-500">Projected Equity Value</p>
            <p className="text-3xl font-semibold">${outputs.projectedEquity.toLocaleString()}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase text-slate-500">Risk Profile</p>
            <p className="text-3xl font-semibold">{outputs.risk}/100</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase text-slate-500">Motivation Profile</p>
            <p className="text-3xl font-semibold">{outputs.motivation}/100</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Compensation Breakdown Pie Chart</h3>
          <Pie
            data={{
              labels: ["Salary", "Equity", "Bonus", "Benefits"],
              datasets: [
                {
                  data: [salary, equity, bonus, benefits],
                  backgroundColor: ["#0f766e", "#1d4ed8", "#f59e0b", "#334155"]
                }
              ]
            }}
          />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Equity vs Salary Risk Curve</h3>
          <Line
            data={{
              labels: ["Low Equity", "Balanced", "High Equity"],
              datasets: [
                {
                  label: "Expected Value",
                  data: [salary + bonus, outputs.total, outputs.total + outputs.projectedEquity * 0.4],
                  borderColor: "#0f766e"
                },
                {
                  label: "Risk",
                  data: [25, outputs.risk, Math.min(100, outputs.risk + 20)],
                  borderColor: "#dc2626"
                }
              ]
            }}
          />
        </div>
      </div>
    </div>
  );
}
