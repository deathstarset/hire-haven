type GetUserResponse = Omit<User, "password" | "updatedAt">;
type GetJobsResponse = Job[];
type GetJobResponse = Job;
type CreateApplicationResponse = Application;
type GetApplicationsResponse = Application[];
