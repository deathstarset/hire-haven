import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AddApplication from "../[id]/components/AddApplication";

interface JobCardProps {
  job: Job;
}
export default function JobCard({ job }: JobCardProps) {
  return (
    <AlertDialog>
      <Card className="flex items-center justify-between p-4 cursor-pointer">
        <div className="flex items-center gap-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>anis</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="font-semibold text-xl">{job.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{job.company.name}</p>
            <Badge variant="default" className="w-fit">
              {job.category.name}
            </Badge>
          </div>
        </div>

        <AlertDialogTrigger asChild>
          <Button className="self-start">Apply</Button>
        </AlertDialogTrigger>

        <AddApplication job={job} />
      </Card>
    </AlertDialog>
  );
}
