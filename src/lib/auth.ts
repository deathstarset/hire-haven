import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./client";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "Text" },
        password: { label: "Password", type: "Password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials) {
            throw new Error("No credentials provided");
          }
          const user = await prisma.user.findUnique({
            where: { username: credentials.username },
          });
          if (!user) {
            throw new Error("User not found");
          }
          const match = compare(credentials.password, user.password);
          if (!match) {
            throw new Error("Wrong password");
          }
          return user as User;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async function ({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    session: async function ({ session, token }) {
      session.user.role = token.role;
      session.user.email = token.email;
      session.user.id = token.id;
      return session;
    },
  },
};
