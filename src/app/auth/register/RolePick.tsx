import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type RolePickProps = {
  value: "User" | "Recruiter";
  onChange: (value: string) => void;
};
export default function RolePick({ value, onChange }: RolePickProps) {
  return (
    <Tabs defaultValue={value} className="w-full" onValueChange={onChange}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger
          value="User"
          className="data-[state=active]:bg-black data-[state=active]:text-white"
        >
          User
        </TabsTrigger>
        <TabsTrigger
          value="Recruiter"
          className="data-[state=active]:bg-black data-[state=active]:text-white"
        >
          Recruiter
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
