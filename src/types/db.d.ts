enum Role {
  User = "User",
  Recruiter = "Recruiter",
}
type User = {
  id: string;
  fullName: null | string;
  email: string;
  emailVerified: null | boolean;
  username: string;
  image: null | string;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
};

type Category = {
  id: string;
  name: string;
};

enum JobType {
  FullTime = "FullTime",
  PartTime = "PartTime",
}
type Job = {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  whoYouAre: string;
  otherSkills: string;
  salary: number;
  company: Company;
  category: Category;
  postedOn: Date;
  applyBefore: Date;
  type: JobType;
};

type Company = {
  id: string;
  name: string;
  description: string;
  link: string;
  Job: Job[];
};

enum ApplicationStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}
type Application = {
  id: string;
  user: User;
  job: Job;
  appliedAt: Date;
  status: ApplicationStatus;
  additionalInformation?: string;
};
type CreateApplication = {
  userId: string;
  jobId: string;
  additionalInformation?: string;
};
