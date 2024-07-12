import prisma from "@/lib/client";

export async function getUserById(id: string): Promise<GetUserResponse> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      omit: { password: true, updatedAt: true },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user as GetUserResponse;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
