type GetUserResponse = Omit<User, "password" | "updatedAt">;
type GetJobsResponse = Job[];
type GetJobResponse = Job;
