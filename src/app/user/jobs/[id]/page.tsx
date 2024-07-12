import { Button } from "@/components/ui/button";
import JobCard from "../components/JobCard";
import { BASE_API } from "@/constants";
import JobOtherInfo from "./components/JobOtherInfo";
import AboutRole from "./components/AboutRole";
import Category from "./components/Category";
import CompanyCard from "./components/CompanyCard";

export default async function Job({ params }: { params: { id: string } }) {
  const response = await fetch(`${BASE_API}/api/jobs/${params.id}`);
  const job: GetJobResponse = await response.json();

  return (
    <div>
      <div className="flex items-center justify-between border-b p-4 mb-4">
        <h1 className="text-2xl font-bold text-header-color">
          Job Description
        </h1>
        <Button>Back to homepage</Button>
      </div>
      <div className="bg-slate-50 m-4 p-8">
        <JobCard job={job} />
      </div>
      <div className="p-4 flex items-start gap-4 border-b border">
        <JobOtherInfo job={job} />
        <div className="w-1/3 flex flex-col gap-4">
          <AboutRole job={job} />
          <Category job={job} />
        </div>
      </div>
      <CompanyCard job={job} />
    </div>
  );
}
