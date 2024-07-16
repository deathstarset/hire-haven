import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <Avatar className="rounded-sm w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge variant="outline" className="h-fit">
          {company.Job.length} Jobs
        </Badge>
      </div>
      <h3 className="text-xl font-semibold">{company.name}</h3>
      <p className="text-gray-500">{company.description.slice(0, 100)}...</p>
    </Card>
  );
}
