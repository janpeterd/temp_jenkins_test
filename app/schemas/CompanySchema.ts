import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(1, { message: "Please enter your company name" }),
  logoUrl: z.string(),
});
