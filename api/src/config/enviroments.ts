import { z } from 'zod';

const envSchema = z.object({
  API_PORT: z.string().min(2, "Puerto es requerdio").max(5),
  API_VERSION: z.string(),
  API_TOKEN_SECRET: z.string().min(8, "El secreto del token debe ser mayor a 8 caracteres y requerido"),
  API_TOKEN_NAME: z.string().min(4, "El nombre del token debe ser mayor a 4 caracteres y requerido"),
  API_URL_ORIGIN: z.string().url().default('http://localhost:3000'),
  API_ENV: z.string(),
});

const { success, data, error } = envSchema.safeParse(process.env);

if (!success) {
  console.error("Error en la configuración de las variables de entorno:", error.format());
  process.exit(1);
}

export const {
  API_PORT,
  API_VERSION,
  API_TOKEN_SECRET,
  API_TOKEN_NAME,
  API_URL_ORIGIN,
  API_ENV
} = data;