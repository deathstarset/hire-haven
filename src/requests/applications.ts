import { apiClient } from "./client";

export async function createApplication(data: {
  additionalInformation: string | null;
  userId: string;
  jobId: string;
}): Promise<CreateApplicationResponse> {
  return (await apiClient.post("/api/applications", data)).data;
}

export async function getApplicationsByUserId(userId: string) {
  return (await apiClient.get(`/api/applications?user_id=${userId}`)).data;
}
