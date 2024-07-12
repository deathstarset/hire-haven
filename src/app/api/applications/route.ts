import { addApplication, findApplicationsByUserId } from "@/db/applications";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const application = await addApplication(data);
    return NextResponse.json(application);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 401 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("user_id");
  const applications = await findApplicationsByUserId(userId as string);
  return NextResponse.json(applications);
}
