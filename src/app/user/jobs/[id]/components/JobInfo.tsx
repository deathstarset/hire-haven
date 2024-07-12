import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface JobInfoProps {
  job: GetJobResponse;
}
export default function JobInfo({ job }: JobInfoProps) {
  return (
    <div className="flex gap-4 border-b pb-4">
      <Avatar className="rounded-sm w-14 h-14">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>anis</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl font-semibold">{job.title}</h1>
        <div className="flex gap-2 text-gray-500">
          <span>{job.company.name}</span>
          <span>.</span>
          <span>{job.type}</span>
        </div>
      </div>
    </div>
  );
}
