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

type Company = {
  id: string;
  name: string;
  description: string;
  link: string;
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
