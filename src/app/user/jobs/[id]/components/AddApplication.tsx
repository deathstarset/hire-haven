import { AlertDialogContent } from "@/components/ui/alert-dialog";
import JobInfo from "./JobInfo";
import SubmitApplicationForm from "./SubmitApplicationForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getUserById } from "@/requests/users";
interface AddApplicationProps {
  job: GetJobResponse;
}
export default async function AddApplication({ job }: AddApplicationProps) {
  const session = await getServerSession(authOptions);
  const user = await getUserById(session?.user.id as string);
  return (
    <AlertDialogContent className="p-6">
      <JobInfo job={job} />
      <SubmitApplicationForm job={job} user={user} />
    </AlertDialogContent>
  );
}
