import { Card } from "@/components/ui/card";

export default function ApplicationsStatus() {
  const jobsApplied = 45;
  const jobsAccepted = 4;
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <Card className="p-4">
        <h4 className="text-lg mb-5 font-semibold">Total Jobs Applied</h4>
        <h1 className="text-5xl font-bold">{jobsApplied}</h1>
      </Card>

      <Card className="row-start-2 p-4">
        <h4 className="text-lg mb-5 font-semibold">Accepted</h4>
        <h1 className="text-5xl font-bold">{jobsAccepted}</h1>
      </Card>
      <Card className="col-start-2 row-start-1 row-end-3 p-4">
        <h4 className="text-lg mb-5 font-semibold">Jobs Applied Status</h4>
      </Card>
    </div>
  );
}
