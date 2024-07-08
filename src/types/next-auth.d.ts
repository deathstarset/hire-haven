import NextAuth, { DefaultUser, User } from "next-auth";
import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      role: "User" | "Recruiter";
      id: string;
    };
  }

  interface User extends DefaultUser {
    role: "User" | "Recruiter";
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: "User" | "Recruiter";
    id: string;
  }
}
