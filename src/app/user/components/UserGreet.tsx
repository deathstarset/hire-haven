import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { BASE_API } from "@/constants";
import { getUserById } from "@/requests/users";
export default async function UserGreet() {
  const session = await getServerSession(authOptions);

  const user = await getUserById(session?.user.id as string);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold">Good Morning {user.username}</h3>
      <p className="text-gray-400">
        Here is what’s happening with your job search applications
      </p>
    </div>
  );
}
