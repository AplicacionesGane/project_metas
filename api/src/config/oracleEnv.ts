import { z } from 'zod';

const oracleSchema = z.object({
  DB_ORACLE_USER: z.string().min(2, "Usuario de la base de datos Oracle es requerido"),
  DB_ORACLE_PASS: z.string().min(2, "Contraseña de la base de datos Oracle es requerido"),
  DB_ORACLE_NAME: z.string().min(2, "Nombre de la base de datos Oracle es requerido"),
  DB_ORACLE_DIR: z.string().min(2, "Directorio de la base de datos Oracle es requerido"),
  DB_ORACLE_DIR_TNS: z.string().min(2, "Directorio TNS de la base de datos Oracle es requerido"),
});

const { success, data, error } = oracleSchema.safeParse(process.env);

if(!success){
  console.error("Error en la configuración de las variables de entorno Oracle:", error.format());
  process.exit(1);
}

export const {
  DB_ORACLE_USER,
  DB_ORACLE_PASS,
  DB_ORACLE_NAME,
  DB_ORACLE_DIR,
  DB_ORACLE_DIR_TNS
} = data;