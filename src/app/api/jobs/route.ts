import { getAllJobs } from "@/db/jobs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const jobs = await getAllJobs();
  return NextResponse.json(jobs);
}
