import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";

export default async function CompaniesSearch() {
  return (
    <Card className="p-7 m-4 flex items-center gap-3">
      <div className="w-full relative">
        <Input
          className="p-6 w-full pl-10"
          placeholder="Company title or keyword"
        />
        <IoSearchSharp className="absolute top-1/2 translate-y-[-50%] left-4" />
      </div>
      <Button className="p-6">Search</Button>
    </Card>
  );
}
