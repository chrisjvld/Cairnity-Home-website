import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.email("Please share a valid email."),
  company: z.string().min(1, "Company name helps us prepare."),
  size: z.enum(["1-10", "11-50", "51-200", "200+"]),
  topic: z.enum([
    "AI literacy & workshops",
    "Workflow audit",
    "Custom implementation",
    "Fractional leadership",
    "Not sure yet",
  ]),
  message: z
    .string()
    .min(10, "A sentence or two on what you're hoping to figure out helps us.")
    .max(2000, "Keep it under 2000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
