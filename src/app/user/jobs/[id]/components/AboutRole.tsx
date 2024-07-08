import { parseDate } from "@/utils/date";

interface AboutRoleProps {
  job: GetJobResponse;
}

export default function AboutRole({ job }: AboutRoleProps) {
  const jobInfo = [
    { title: "Apply Before", value: parseDate(job.applyBefore) },
    { title: "Job Posted On", value: parseDate(job.postedOn) },
    { title: "Job Type", value: job.type },
    { title: "Salary", value: job.salary },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold text-header-color mb-4">
        About this role
      </h3>
      <div className="flex flex-col gap-4">
        {jobInfo.map((info, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <p className="text-gray-500">{info.title}</p>
              <p className="font-medium">{info.value as string}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
