import { connectionOracle } from "../connections/oracledb";
import { Sucursal } from "../models/sucursalespw";
import { BaseError } from "../utils/baseError";

const ERROR_MESSAGES = {
  DB_CONNECTION: 'Error al conectar con la base de datos',
  USER_NOT_FOUND: 'Usuario no encontrado o no existe',
  INVALID_CREDENTIALS: 'Usuario o Contraseña incorrectos',
  USER_BLOCKED: 'El Usuario se encuentra bloqueado !!!',
  ZONE_NOT_FOUND: 'No se encontró la zona de la sucursal en la base de datos powerbi',
  DB_QUERY: 'Error al obtener el usuario en la base de datos'
};

export const getUserOracle = async (password: string, username: string) => {
  const connection = await connectionOracle();

  if (connection instanceof Error) {
    throw new BaseError(ERROR_MESSAGES.DB_CONNECTION, 500);
  }

  try {
    const { rows } = await connection.execute<string[]>(
      "SELECT get_authentication_msr(:password, :username) AS AUTH FROM dual",
      [password, username]
    );

    if (!rows || rows.length === 0) {
      throw new BaseError(ERROR_MESSAGES.DB_QUERY, 500);
    }

    const strResult = rows[0][0].split(',');

    if (strResult[0] === 'No data found') {
      throw new BaseError(ERROR_MESSAGES.USER_NOT_FOUND, 404);
    }
    if (strResult[0] === 'FALSE' && strResult[2] === 'A') {
      throw new BaseError(ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
    }
    if (strResult[0] === 'TRUE' && strResult[2] === 'B') {
      throw new BaseError(ERROR_MESSAGES.USER_BLOCKED, 401);
    }

    const zona = await Sucursal.findOne({
      attributes: ['ZONA'],
      where: { CODIGO: strResult[1] },
    });

    if (!zona) {
      throw new BaseError(ERROR_MESSAGES.ZONE_NOT_FOUND, 404);
    }

    return {
      sucursal: parseInt(strResult[1]),
      username,
      zona: parseInt(zona.dataValues.ZONA)
    };
  } finally {
    await connection.close(); // Ensure the connection is closed
  }
};