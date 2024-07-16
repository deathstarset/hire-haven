import { findAllCompanies } from "@/db/companies";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const companies = await findAllCompanies();
    return NextResponse.json(companies);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
