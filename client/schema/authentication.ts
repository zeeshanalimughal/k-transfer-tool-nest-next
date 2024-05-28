import * as z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z
    .string()
    .min(3, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type SingUpFormValues = z.infer<typeof signUpSchema>;
export type SingInFormValues = z.infer<typeof signInSchema>;
