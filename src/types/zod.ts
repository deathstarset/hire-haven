import { z } from "zod";

export const registerSchema = z.object({
  role: z.enum(["User", "Recruiter"]),
  email: z.string().email().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

export type RegisterType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

export type LoginType = z.infer<typeof loginSchema>;

export const submitApplicationSchema = z.object({
  additionalInformation: z.string().max(500).nullable(),
});

export type SubmitApplicationType = z.infer<typeof submitApplicationSchema>;
