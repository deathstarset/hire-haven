import { Card } from "@/components/ui/card";
import { FaInstagram } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold">Social Links</h3>
      <div className="flex flex-col gap-2">
        <div>
          <p>Instagram</p>
        </div>
      </div>
    </Card>
  );
}
