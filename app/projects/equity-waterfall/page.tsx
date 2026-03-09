import equityData from "@/data/equity_distribution.json";
import EquityWaterfall from "@/components/charts/EquityWaterfall";

export default function EquityWaterfallPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Equity Distribution and Ownership</h1>
      <p className="lead">Research question: How is equity distributed across the organization?</p>
      <EquityWaterfall data={equityData} />
    </div>
  );
}
