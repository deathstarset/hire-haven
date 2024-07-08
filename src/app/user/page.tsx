import { Button } from "@/components/ui/button";
import UserGreet from "./components/UserGreet";
import ApplicationsStatus from "./components/ApplicationsStatus";
import RecentApplications from "./components/RecentApplications";

export default function User() {
  return (
    <div className="">
      <div className="flex items-center justify-between border-b p-4 mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button>Back to homepage</Button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <UserGreet />
        <ApplicationsStatus />
        <RecentApplications />
      </div>
    </div>
  );
}
