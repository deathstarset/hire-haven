interface JobOtherInfoProps {
  job: GetJobResponse;
}

export default function JobOtherInfo({ job }: JobOtherInfoProps) {
  const jobOtherInfo = [
    { title: "Description", value: job.description },
    { title: "Responsibilities", value: job.responsibilities },
    { title: "Who You Are", value: job.whoYouAre },
    { title: "Nice To have", value: job.otherSkills },
  ];
  return (
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
  );
}
