import prisma from "@/lib/client";

export async function getAllJobs() {
  try {
    const jobs = await prisma.job.findMany({
      include: { company: true, category: true },
    });
    return jobs as GetJobsResponse;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getJobById(id: string) {
  try {
    const job = await prisma.job.findUnique({
      where: { id },
      include: { company: true, category: true },
    });
    return job;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
