import JobCard from "./JobCard";
import Link from "next/link";
import { getJobs } from "@/requests/jobs";
import JobsFilter from "./JobsFilter";

export default async function AllJobs() {
  const jobs = await getJobs();
  return (
    <div className="border-t flex gap-3">
      <JobsFilter />
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
