import { apiClient } from "./client";

export async function getUserById(id: string): Promise<GetUserResponse> {
  return (await apiClient.get(`/api/users/${id}`)).data;
}

export async function register() {}
