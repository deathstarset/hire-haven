import { Button } from "@/components/ui/button";
import JobCard from "../components/JobCard";
import { BASE_API } from "@/constants";
import { parseDate } from "@/utils/date";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default async function Job({ params }: { params: { id: string } }) {
  const response = await fetch(`${BASE_API}/api/jobs/${params.id}`);
  const job: GetJobResponse = await response.json();
  const jobInfo = [
    { title: "Apply Before", value: parseDate(job.applyBefore) },
    { title: "Job Posted On", value: parseDate(job.postedOn) },
    { title: "Job Type", value: job.type },
    { title: "Salary", value: job.salary },
  ];

  const jobOtherInfo = [
    { title: "Description", value: job.description },
    { title: "Responsibilities", value: job.responsibilities },
    { title: "Who You Are", value: job.whoYouAre },
    { title: "Nice To have", value: job.otherSkills },
  ];

  return (
    <div>
      <div className="flex items-center justify-between border-b p-4 mb-4">
        <h1 className="text-2xl font-bold text-header-color">
          Job Description
        </h1>
        <Button>Back to homepage</Button>
      </div>
      <div className="bg-slate-50 m-4 p-8">
        <JobCard job={job} />
      </div>
      <div className="p-4 flex items-start gap-4 border-b border">
        <div className="w-2/3 flex flex-col gap-4">
          {jobOtherInfo.map((info, index) => {
            return (
              <div key={index}>
                <h3 className="font-semibold text-2xl text-header-color mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-500">{info.value}</p>
              </div>
            );
          })}
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-header-color mb-4">
              About this role
            </h3>
            <div className="flex flex-col gap-4">
              {jobInfo.map((info, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <p className="text-gray-500">{info.title}</p>
                    <p className="font-medium">{info.value as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-header-color mb-4">
              Category
            </h3>
            <div className="bg-slate-200 rounded-full px-2 py-1 font-medium w-fit">
              {job.category.name}
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}
