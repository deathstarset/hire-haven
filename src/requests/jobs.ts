import { apiClient } from "./client";

export async function getJobById(id: string): Promise<GetJobResponse> {
  return (await apiClient.get(`/api/jobs/${id}`)).data();
}

export async function getJobs(): Promise<GetJobsResponse> {
  return (await apiClient.get("/api/jobs")).data;
}
