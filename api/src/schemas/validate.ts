import { BaseError } from '../utils/baseError';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string()
    .min(8, { message: "Usuario debe contener al menos 8 caracteres" })
    .max(16, { message: "Usuario debe contener como máximo 16 caracteres" })
    .refine((val) => val.startsWith('CV'), { message: "El usuario debe iniciar con 'CV' en mayúscula" }),
  password: z.string()
    .min(3, { message: "Contraseña debe contener más de 3 caracteres" })
});

export const validateCredentials = (credentials: unknown) => {
  const { success, data, error } = loginSchema.safeParse(credentials);

  if (!success) {
    throw new BaseError(error.errors[0].message, 400, true)
  }

  return data;
};