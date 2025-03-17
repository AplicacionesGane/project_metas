import { z } from 'zod';

const loginSchema = z.object({
  username: z.string()
    .min(5, { message: "Usuario debe contener 5 caracteres como mínimo" })
    .max(16, { message: "Usuario debe contener 16 caracteres como máximo" })
    .refine((val) => val.startsWith('CV'), { message: "El usuario debe iniciar con 'CV' en mayúscula" }),
  password: z.string()
  .min(3, { message: "Contraseña debe contener más de 3 caracteres" })
})

export const validateCredentials = async (credentials: unknown) => {
  const { success, data, error } = await loginSchema.safeParseAsync(credentials);

  if(!success) throw new Error(error.errors[0].message);

  return data;
}