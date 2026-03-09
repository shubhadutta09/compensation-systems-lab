import { NextRequest, NextResponse } from "next/server";
import laborData from "@/data/labor_market_data.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const role = searchParams.get("role");
  const location = searchParams.get("location");
  const industry = searchParams.get("industry");

  const filtered = laborData.filter(
    (row) => (!role || row.role === role) && (!location || row.location === location) && (!industry || row.industry === industry)
  );

  return NextResponse.json({ data: filtered });
}
