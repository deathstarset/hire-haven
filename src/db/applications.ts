import prisma from "@/lib/client";

export async function addApplication(data: CreateApplication) {
  try {
    const application = await prisma.application.create({
      data: {
        userId: data.userId,
        jobId: data.jobId,
        additionalInformation:
          data.additionalInformation === "" ? null : data.additionalInformation,
      },
    });
    return application;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function findApplicationsByUserId(userId: string) {
  try {
    const applications = await prisma.application.findMany({
      where: { userId },
      include: {
        job: { include: { company: true } },
        user: true,
      },
    });
    return applications;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
