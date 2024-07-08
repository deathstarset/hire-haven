import { BASE_API } from "@/constants";
import JobCard from "./JobCard";
import Link from "next/link";

export default async function AllJobs() {
  const response = await fetch(`${BASE_API}/api/jobs`);
  const jobs: GetJobsResponse = await response.json();
  return (
    <div className="border-t flex gap-3">
      <div className="bg-red-100 w-1/4 h-full p-4">Hello</div>
      <div className=" w-3/4 p-4 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-xl">All Jobs</h3>
          <p className="text-sm">Showing {jobs.length} results</p>
        </div>
        <div className="flex flex-col gap-4">
          {jobs.map((job) => {
            return (
              <Link href={`/user/jobs/${job.id}`} key={job.id}>
                <JobCard job={job} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
