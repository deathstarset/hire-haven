import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Login() {
  const session = await getServerSession();
  if (session) {
    redirect("/user");
  }
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Welcome Back Dude</h1>
      <Button className="w-full">Login with Google</Button>

      <div className="flex items-center gap-4">
        <span className="h-[1px]  bg-black flex-grow"></span>
        <span>Or login with email</span>
        <span className="h-[1px]  bg-black flex-grow"></span>
      </div>
      <LoginForm />
      <span>
        Dont have an account?{" "}
        <Link href="/auth/register" className="text-blue-500 cursor-pointer">
          Sign Up
        </Link>
      </span>
    </div>
  );
}
