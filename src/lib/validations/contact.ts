import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .trim()
    .max(200, "Subject must be under 200 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;
