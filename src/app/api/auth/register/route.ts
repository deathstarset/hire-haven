import { NextResponse } from "next/server";
import { prisma } from "@/lib/client";
import bcrypt from "bcrypt";
export async function POST(request: Request) {
  try {
    const { username, email, password, role } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, email, password: hashedPassword, role },
    });
    const userProfile = await prisma.userProfile.create({
      data: { userId: user.id },
    });
    return NextResponse.json({ message: "User created" });
  } catch (error) {
    return NextResponse.json({
      message: `An error occured ${(error as Error).message}`,
    });
  }
}
