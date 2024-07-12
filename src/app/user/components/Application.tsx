import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { parseDate } from "@/utils/date";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ApplicationProps {
  application: Application;
}

export default function Application({ application }: ApplicationProps) {
  return (
    <>
      <div className="flex gap-4 items-center w-1/3">
        <Avatar className="rounded-sm w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <h3 className="font-medium">{application.job.title}</h3>
          <p>
            {application.job.company.name} {application.job.type}
          </p>
        </div>
      </div>
      <div>
        <h3>Date Applied</h3>
        <p>{parseDate(application.appliedAt)}</p>
      </div>
      <div>{application.status}</div>
      <Button variant={"ghost"}>
        <BsThreeDotsVertical className="text-lg" />
      </Button>
    </>
  );
}
