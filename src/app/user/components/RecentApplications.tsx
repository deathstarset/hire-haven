import { Card } from "@/components/ui/card";
import Application from "./Application";

const applications = [
  {
    companyLogo: "https://example.com/logo1.png",
    jobName: "Software Engineer",
    companyName: "Tech Corp",
    fullTimeOrPartTime: "Full Time",
    applicationDate: "2024-07-01",
    applicationStatus: "Applied",
  },
  {
    companyLogo: "https://example.com/logo2.png",
    jobName: "Project Manager",
    companyName: "Biz Solutions",
    fullTimeOrPartTime: "Part Time",
    applicationDate: "2024-07-02",
    applicationStatus: "Interview",
  },
  {
    companyLogo: "https://example.com/logo3.png",
    jobName: "Data Scientist",
    companyName: "Data Innovators",
    fullTimeOrPartTime: "Full Time",
    applicationDate: "2024-07-03",
    applicationStatus: "Offer",
  },
  {
    companyLogo: "https://example.com/logo4.png",
    jobName: "Web Developer",
    companyName: "Web World",
    fullTimeOrPartTime: "Full Time",
    applicationDate: "2024-07-04",
    applicationStatus: "Rejected",
  },
  {
    companyLogo: "https://example.com/logo5.png",
    jobName: "System Administrator",
    companyName: "IT Solutions",
    fullTimeOrPartTime: "Part Time",
    applicationDate: "2024-07-05",
    applicationStatus: "Pending",
  },
  {
    companyLogo: "https://example.com/logo6.png",
    jobName: "DevOps Engineer",
    companyName: "Cloud Services",
    fullTimeOrPartTime: "Full Time",
    applicationDate: "2024-07-06",
    applicationStatus: "Applied",
  },
  {
    companyLogo: "https://example.com/logo7.png",
    jobName: "Product Manager",
    companyName: "Product Pros",
    fullTimeOrPartTime: "Full Time",
    applicationDate: "2024-07-07",
    applicationStatus: "Interview",
  },
  {
    companyLogo: "https://example.com/logo8.png",
    jobName: "QA Tester",
    companyName: "Quality Assurance",
    fullTimeOrPartTime: "Part Time",
    applicationDate: "2024-07-08",
    applicationStatus: "Offer",
  },
  {
    companyLogo: "https://example.com/logo9.png",
    jobName: "UI/UX Designer",
    companyName: "Design Studio",
    fullTimeOrPartTime: "Full Time",
    applicationDate: "2024-07-09",
    applicationStatus: "Rejected",
  },
  {
    companyLogo: "https://example.com/logo10.png",
    jobName: "Network Engineer",
    companyName: "Network Solutions",
    fullTimeOrPartTime: "Full Time",
    applicationDate: "2024-07-10",
    applicationStatus: "Pending",
  },
];

export default function RecentApplications() {
  return (
    <Card className="p-4">
      <h4 className="text-lg mb-5 font-semibold h-full">Recent Applications</h4>
      <div className="flex flex-col gap-4">
        {applications.map((application) => {
          return (
            <div
              key={application.companyLogo}
              className="flex items-center justify-between p-4 bg-slate-100 rounded"
            >
              <Application application={application} />
            </div>
          );
        })}
      </div>
    </Card>
  );
}
