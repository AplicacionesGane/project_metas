import { DB_ORACLE_DIR, DB_ORACLE_DIR_TNS, DB_ORACLE_NAME, DB_ORACLE_PASS, DB_ORACLE_USER } from '../config/oracleEnv';
import oracledb from 'oracledb';

oracledb.initOracleClient({ libDir: DB_ORACLE_DIR });

export async function connectionOracle() {
  try {
    const pool = await oracledb.createPool({
      user: DB_ORACLE_USER,
      password: DB_ORACLE_PASS,
      configDir: DB_ORACLE_DIR_TNS,
      connectString: DB_ORACLE_NAME
    });

    return pool.getConnection();
  } catch (error) {
    console.error('Error connecting to Oracle database', error);
    return error as Error;
  }
}