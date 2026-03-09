"use client";

import * as d3 from "d3";

export default function LaborMarketHeatmap({
  data
}: {
  data: { role: string; dimension: string; value: number }[];
}) {
  const roles = Array.from(new Set(data.map((d) => d.role)));
  const dimensions = Array.from(new Set(data.map((d) => d.dimension)));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Role Scarcity Heatmap</h3>
      <div className="grid gap-2" style={{ gridTemplateColumns: `160px repeat(${dimensions.length}, minmax(70px, 1fr))` }}>
        <div />
        {dimensions.map((dim) => (
          <div key={dim} className="text-center text-xs text-slate-500">
            {dim}
          </div>
        ))}

        {roles.map((role) => (
          <div key={role} className="contents">
            <div className="text-xs font-medium text-slate-700">{role}</div>
            {dimensions.map((dim) => {
              const cell = data.find((d) => d.role === role && d.dimension === dim);
              const val = cell?.value ?? 0;
              return (
                <div
                  key={`${role}-${dim}`}
                  className="rounded p-2 text-center text-xs font-semibold text-slate-900"
                  style={{ backgroundColor: d3.interpolateYlGnBu(Math.min(1, val)) }}
                >
                  {Math.round(val * 100)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
