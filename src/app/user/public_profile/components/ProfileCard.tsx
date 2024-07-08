import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProfileCard() {
  return (
    <Card className="p-6 flex justify-between">
      <div className="flex gap-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">Username</h2>
          <p className="text-gray-500">Where he works at and the position</p>
          <p className="text-gray-500">Location</p>
        </div>
      </div>
      <Button>Edit Profile</Button>
    </Card>
  );
}
