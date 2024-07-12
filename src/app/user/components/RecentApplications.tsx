import { Card } from "@/components/ui/card";
import Application from "./Application";
import { getApplicationsByUserId } from "@/requests/applications";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function RecentApplications() {
  const session = await getServerSession(authOptions);
  const applications: GetApplicationsResponse = await getApplicationsByUserId(
    session?.user.id as string
  );
  return (
    <Card className="p-4">
      <h4 className="text-lg mb-5 font-semibold h-full">Recent Applications</h4>
      <div className="flex flex-col gap-4">
        {applications.map((application) => {
          return (
            <div
              key={application.id}
              className="flex items-center justify-between p-4 bg-slate-100 rounded"
            >
              <Application application={application} />
            </div>
          );
        })}
      </div>
    </Card>
  );
}
