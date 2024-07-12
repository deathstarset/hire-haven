import { Button } from "@/components/ui/button";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Register() {
  const session = await getServerSession();
  if (session) {
    redirect("/user");
  }
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Get more opportunities</h1>
      <Button className="w-full">Sign Up with Google</Button>

      <div className="flex items-center gap-4">
        <span className="h-[1px]  bg-black flex-grow"></span>
        <span>Or sign up with email</span>
        <span className="h-[1px]  bg-black flex-grow"></span>
      </div>
      <RegisterForm />
      <span>
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-500 cursor-pointer">
          Login
        </Link>
      </span>
      <p className="text-sm">
        By clicking Continue, you acknowledge that you have read and accept the
        Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
