import { apiClient } from "./client";

export async function getAllCompanies(): Promise<GetCompaniesResponse> {
  return (await apiClient.get("/api/companies")).data;
}
