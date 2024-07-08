import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/*
- company logo
- job name
- company name
- full time or part time
- application date
- application status
*/

const companyIds = [
  "cly9y6l490000nenffmtplu6n",
  "cly9y6ts80001nenfbfvl031u",
  "cly9y70mx0002nenfi3qokyo9",
  "cly9y75n20003nenf4s2lqzx9",
  "cly9y7buh0004nenfpsypy35p",
  "cly9y998e0005nenf4bjvaz6s",
];
const job = {
  title: "Backend Engineer",
  description: "",
  salary: 150000,
  companyId: "cly9y6l490000nenffmtplu6n",
};

const categoryIds = [
  { name: "Web Development", id: "cly9y9yvp0006nenfcw4avs36" },
  { name: "Data Science", id: "cly9yafum0007nenfj6cnaapl" },
  { name: "Machine Learning", id: "cly9yats60008nenfq0vc6wom" },
  { name: "Cyber Security", id: "cly9yb8nj0009nenfw5ln9cfk" },
];

interface ApplicationProps {
  application: {
    companyLogo: string;
    jobName: string;
    companyName: string;
    fullTimeOrPartTime: string;
    applicationDate: string;
    applicationStatus: string;
  };
}

export default function Application({ application }: ApplicationProps) {
  return (
    <>
      <div className="flex gap-4 bg-red-100 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="bg-red-100">
          <h3 className="font-medium">{application.jobName}</h3>
          <p>
            {application.companyName} {application.fullTimeOrPartTime}
          </p>
        </div>
      </div>
      <div>
        <h3>Date Applied</h3>
        <p>{application.applicationDate}</p>
      </div>
      <div>{application.applicationStatus}</div>
      <div>three points</div>
    </>
  );
}
