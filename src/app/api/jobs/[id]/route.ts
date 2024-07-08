import { getJobById } from "@/db/jobs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  route: { params: { id: string } }
) {
  const job = await getJobById(route.params.id);
  return NextResponse.json(job);
}
