import { z } from "zod";

export const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Please enter your email" })
      .email({ message: "Invalid email address" }),
    firstname: z.string().min(1, { message: "Please enter your first name" }),
    lastname: z.string().min(1, { message: "Please enter your last name" }),
    password: z
      .string()
      .min(1, {
        message: "Please enter your password",
      })
      .min(7, {
        message: "Password must be at least 7 characters long",
      }),
    confirmPassword: z.string(),
    isCompanyUser: z.boolean().default(false),
    companyName: z.string().optional(),
    logoUrl: z.string().optional(),
  })
  .refine((data) => data.isCompanyUser || !data.companyName, {
    message: "Please enter your company name",
    path: ["companyName"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });
