import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

type Input = {
  role: string;
  level: string;
  performanceRating: number;
  marketBenchmark: number;
  retentionRisk: number;
  location: string;
};

function heuristicRecommendation(input: Input) {
  const performanceFactor = (input.performanceRating - 3) * 1.4;
  const retentionFactor = input.retentionRisk / 20;
  const salaryPct = Math.max(1, Math.min(12, Number((performanceFactor + retentionFactor).toFixed(1))));
  const equity = Math.round(input.marketBenchmark * (0.08 + input.retentionRisk / 1000));
  const bonus = Math.round(input.marketBenchmark * (0.04 + input.performanceRating / 100));

  return {
    recommendation: {
      salaryAdjustment: `${salaryPct}% increase`,
      equityRefreshGrant: `$${equity.toLocaleString()}`,
      bonusAdjustment: `$${bonus.toLocaleString()}`
    },
    confidenceScore: Math.min(0.93, Math.max(0.62, 0.68 + input.performanceRating / 20 + input.retentionRisk / 400)),
    fallbackExplanation: `For a ${input.role} at ${input.level} in ${input.location}, the recommendation balances market benchmark pressure, performance signal, and retention risk.`
  };
}

export async function POST(request: NextRequest) {
  try {
    const input = (await request.json()) as Input;
    const heuristic = heuristicRecommendation(input);

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        recommendation: heuristic.recommendation,
        explanation: `${heuristic.fallbackExplanation} (Generated via deterministic model because OPENAI_API_KEY is not set.)`,
        confidenceScore: heuristic.confidenceScore
      });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `You are a compensation analytics advisor. Provide a concise explanation (2-4 sentences) for this recommendation.\nInput: ${JSON.stringify(
      input
    )}\nRecommendation: ${JSON.stringify(heuristic.recommendation)}\nMention fairness, market alignment, and retention rationale.`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2
    });

    return NextResponse.json({
      recommendation: heuristic.recommendation,
      explanation: completion.choices[0]?.message?.content ?? heuristic.fallbackExplanation,
      confidenceScore: heuristic.confidenceScore
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to produce recommendation",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
