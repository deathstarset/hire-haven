import { Button } from "@/components/ui/button";
import JobSearch from "./components/JobSearch";
import AllJobs from "./components/AllJobs";

export default async function Jobs() {
  return (
    <div className="">
      <div className="flex items-center justify-between border-b p-4 mb-4">
        <h1 className="text-2xl font-bold">Find Jobs</h1>
        <Button>Back to homepage</Button>
      </div>
      <JobSearch />
      <AllJobs />
    </div>
  );
}
