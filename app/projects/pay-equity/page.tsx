import PayEquityRegression from "@/components/charts/PayEquityRegression";
import { adjustedPayGap, payEquityCoefficients } from "@/lib/mockData";

export default function PayEquityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Pay Equity Analytics</h1>
      <p className="lead">Research question: Do pay differences remain after controlling for legitimate job factors?</p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl">Controlled Factors</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Role</li>
          <li>Level</li>
          <li>Tenure</li>
          <li>Performance</li>
          <li>Location</li>
        </ul>
      </div>
      <PayEquityRegression coefficients={payEquityCoefficients} gaps={adjustedPayGap} />
    </div>
  );
}
