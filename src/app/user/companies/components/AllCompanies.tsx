import { getAllCompanies } from "@/requests/companies";
import CompaniesFilter from "./CompaniesFilter";
import CompanyCard from "./CompanyCard";
import Link from "next/link";

export default async function AllCompanies() {
  const companies = await getAllCompanies();
  return (
    <div className="border-t flex gap-3">
      <CompaniesFilter />
      <div className=" w-3/4 p-4 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-xl">All Companies</h3>
          <p className="text-sm">Showing {companies.length} results</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {companies.map((company) => {
            return (
              <Link href={`/user/companies/${company.id}`} key={company.id}>
                <CompanyCard company={company} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
