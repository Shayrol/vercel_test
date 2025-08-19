import { fetchTourismData } from "@/app/main/api/services/fetchTourismData";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const params = Object.fromEntries(new URL(req.url).searchParams) as any;
  const data = await fetchTourismData(params);

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=600, s-maxage=600",
    },
  });
}
