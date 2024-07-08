import { NextResponse } from "next/server";
import { prisma } from "@/lib/client";
export async function GET(request: Request) {
  return NextResponse.json({});
}
