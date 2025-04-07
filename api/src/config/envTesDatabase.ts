import { z } from 'zod';

const envTestDatabase = z.object({
  DB_TEST_DATABASE: z.string(),
  DB_TEST_HOST: z.string(),
  DB_TEST_PASSWORD: z.string(),
  DB_TEST_PORT: z.string().min(2).transform((e) => parseInt(e)),
  DB_TEST_USER: z.string(),
})

const { success, data, error } = envTestDatabase.safeParse(process.env)
if (!success) {
  console.error(error.format())
  process.exit(1)
}

export const {
  DB_TEST_DATABASE,
  DB_TEST_HOST,
  DB_TEST_PASSWORD,
  DB_TEST_PORT,
  DB_TEST_USER
} = data