import prisma from "@/lib/client";

export async function findAllCompanies() {
  try {
    const companies = await prisma.company.findMany({ include: { Job: true } });
    return companies;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
