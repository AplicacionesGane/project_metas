import { z } from 'zod';

const loginSchema = z.object({
  username: z.string(),
  password: z.string()
})

export const validateCredentials = (credentials: unknown) => {
  const { success, data, error } = loginSchema.safeParse(credentials);

  if(!success) throw new Error(error.errors[0].message);

  return data;
}