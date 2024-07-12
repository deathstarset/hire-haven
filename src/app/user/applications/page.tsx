import { Button } from "@/components/ui/button";
import ApplicationsHistory from "./components/ApplicationsHistory";

export default function Applications() {
  return (
    <div>
      <div className="flex items-center justify-between border-b p-4 mb-4">
        <h1 className="text-2xl font-bold">My Applications</h1>
        <Button>Back to homepage</Button>
      </div>
      <ApplicationsHistory />
    </div>
  );
}
