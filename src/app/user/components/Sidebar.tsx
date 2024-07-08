import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: 1, name: "Dashboard", link: "/user/" },
  { id: 2, name: "My Applications", link: "/user/applications" },
  { id: 3, name: "Find Jobs", link: "/user/jobs" },
  { id: 4, name: "Browse Companies", link: "/user/companies" },
  { id: 5, name: "My Public Profile", link: "/user/public_profile" },
];
export default function Sidebar() {
  return (
    <div className="p-4 bg-slate-100 w-1/5 h-screen flex flex-col gap-5 fixed">
      <h1 className="text-3xl font-bold">HireHaven</h1>
      <nav className="flex flex-col gap-4 text-lg text-gray-500">
        {navItems.map((item) => {
          return (
            <Button
              key={item.id}
              className="justify-start hover:bg-slate-200 text-base font-normal text-gray-500"
              variant={"secondary"}
            >
              <Link href={item.link}>{item.name}</Link>
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
