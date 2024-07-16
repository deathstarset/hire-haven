import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function JobsFilter() {
  return (
    <div className="w-1/4 p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold mb-3">Type of Employment</h3>
        <div className="flex items-center gap-2">
          <Checkbox />
          <p>Full-time</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox />
          <p>Part-time</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold mb-3">Salary Range</h3>
        <div className="flex items-center justify-between">
          <Label>Min</Label>
          <Input className="w-2/3" type="number" />
        </div>
        <div className="flex items-center justify-between">
          <Label>Max</Label>
          <Input className="w-2/3" type="number" />
        </div>
      </div>
      <Button>Apply Filters</Button>
    </div>
  );
}
