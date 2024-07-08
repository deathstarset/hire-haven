import { getUserById } from "@/db/users";
import { prisma } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  route: { params: { id: string } }
) {
  const user = await getUserById(route.params.id);
  return NextResponse.json(user);
}
