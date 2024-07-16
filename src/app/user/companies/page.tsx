import { Button } from "@/components/ui/button";
import CompaniesSearch from "./components/CompaniesSearch";
import AllCompanies from "./components/AllCompanies";

export default function Companies() {
  return (
    <div>
      <div className="flex items-center justify-between border-b p-4 mb-4">
        <h1 className="text-2xl font-bold">Browse Companies</h1>
        <Button>Back to homepage</Button>
      </div>
      <CompaniesSearch />
      <AllCompanies />
    </div>
  );
}
