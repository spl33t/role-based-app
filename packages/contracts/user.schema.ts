import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().optional().default("Аноним"),
  login: z.string().nonempty(),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  hash_password: z.string().nonempty(),
})
userSchema.omit({ id: true });
export type UserSchema = z.infer<typeof userSchema>