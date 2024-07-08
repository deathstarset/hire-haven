import { Button } from "@/components/ui/button";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import AdditionalDetails from "./components/AdditionalDetails";
import SocialLinks from "./components/SocialLinks";

export default function Profile() {
  return (
    <div>
      <div className="flex items-center justify-between border-b p-4 mb-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Button>Back to homepage</Button>
      </div>
      <div className="p-4 flex gap-4">
        <div className="w-2/3 flex flex-col gap-4">
          <ProfileCard />
          <AboutMe />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <AdditionalDetails />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
