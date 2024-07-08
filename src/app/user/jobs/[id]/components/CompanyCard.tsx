import { parseDate } from "@/utils/date";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface CompanyCardProps {
  job: GetJobResponse;
}

export default function CompanyCard({ job }: CompanyCardProps) {
  return (
    <div className="p-4 w-1/2 flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-3xl font-semibold">{job.company.name}</h2>
          <Link href={job.company.link} className="text-blue-500">
            Read more about {job.company.name}
          </Link>
        </div>
      </div>
      <div>{job.company.description}</div>
    </div>
  );
}
