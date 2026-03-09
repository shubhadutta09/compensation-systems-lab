import { NextRequest, NextResponse } from "next/server";

function runMonteCarlo({
  headcountGrowth,
  promotionRate,
  meritIncreaseBudget,
  equityRefreshRate,
  iterations
}: {
  headcountGrowth: number;
  promotionRate: number;
  meritIncreaseBudget: number;
  equityRefreshRate: number;
  iterations: number;
}) {
  const baseBudget = 50_000_000;
  const outcomes: number[] = [];

  for (let i = 0; i < iterations; i += 1) {
    const noise = (Math.random() - 0.5) * 0.06;
    const budget =
      baseBudget *
      (1 + headcountGrowth / 100 * 0.7 + promotionRate / 100 * 0.4 + meritIncreaseBudget / 100 + equityRefreshRate / 100 * 0.3 + noise);
    outcomes.push(budget);
  }

  outcomes.sort((a, b) => a - b);

  const p10 = outcomes[Math.floor(iterations * 0.1)];
  const p50 = outcomes[Math.floor(iterations * 0.5)];
  const p90 = outcomes[Math.floor(iterations * 0.9)];
  const expectedBudget = outcomes.reduce((sum, value) => sum + value, 0) / iterations;

  const min = outcomes[0];
  const max = outcomes[outcomes.length - 1];
  const bins = 10;
  const width = (max - min) / bins;
  const histogram = Array.from({ length: bins }, (_, idx) => ({
    bucket: `${Math.round((min + idx * width) / 1_000_000)}M-${Math.round((min + (idx + 1) * width) / 1_000_000)}M`,
    count: 0
  }));

  for (const value of outcomes) {
    const index = Math.min(bins - 1, Math.floor((value - min) / width));
    histogram[index].count += 1;
  }

  return { expectedBudget, p10, p50, p90, histogram };
}

export async function POST(request: NextRequest) {
  const input = (await request.json()) as {
    headcountGrowth: number;
    promotionRate: number;
    meritIncreaseBudget: number;
    equityRefreshRate: number;
    iterations: number;
  };

  const iterations = input.iterations && input.iterations > 0 ? input.iterations : 1000;

  const result = runMonteCarlo({ ...input, iterations });
  return NextResponse.json(result);
}
