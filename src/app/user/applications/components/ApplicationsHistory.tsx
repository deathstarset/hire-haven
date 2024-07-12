import { getApplicationsByUserId } from "@/requests/applications";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import DataTable from "./data-table";
import { Application, columns } from "./columns";
import { parseDate } from "@/utils/date";
import { Button } from "@/components/ui/button";
import { IoSearch, IoFilterSharp } from "react-icons/io5";

export default async function ApplicationsHistory() {
  const session = await getServerSession(authOptions);
  const applications: GetApplicationsResponse = await getApplicationsByUserId(
    session?.user.id as string
  );
  console.log(applications);
  const data: Application[] = applications.map((application) => {
    return {
      companyName: application.job.company.name,
      role: application.job.title,
      applicationDate: parseDate(application.appliedAt),
      status: application.status,
    };
  });
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Applications History</h3>
        <div className="flex items-center gap-4">
          <Button variant={"outline"} className="flex items-center gap-2">
            <IoSearch className="text-base" />
            <span>Search</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <IoFilterSharp />
            <span className="text-base">Filter</span>
          </Button>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
