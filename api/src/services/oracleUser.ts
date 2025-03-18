import { connectionOracle } from "../connections/oracledb";
import { Sucursal } from "../models/sucursalespw";
import { BaseError } from "../utils/baseError";

export const oracleUser = async (password: string, username: string) => {
  const connection = await connectionOracle();

  if (connection instanceof Error) {
    throw new Error('Error al conectar con la base de datos');
  }

  const { rows } = await connection.execute<string[]>(
    "SELECT get_authentication_msr(:password, :username) AS AUTH FROM dual",
    [password, username]
  );

  if (rows === undefined) {
    throw new Error('Error al obtener el usuario en la base de datos')
  }

  // TODO: dividimos el resultado en un array de 3 elementos para validar el resultado
  const strResult = rows[0][0].split(',')

  if (strResult[0] === 'No data found') {
    throw new BaseError('Usuario no encontrado o no existe', 404);
  }
  if (strResult[0] === 'FALSE' && strResult[2] === 'A') {
    throw new BaseError('Usuario o Contraseña incorrectos', 401);
  }
  if (strResult[0] === 'TRUE' && strResult[2] === 'B') {
    throw new BaseError('El Usuario se encuentra bloqueado !!!', 401);
  }

  const zona = await Sucursal.findOne({
    attributes: ['ZONA'],
    where: { CODIGO: strResult[1] },
  })

  if (!zona) {
    throw new Error('No se encontro la zona de la sucursal en la base de datos powerbi')
  }

  // TODO: retornamos el resultado de la consulta en un objeto
  return {
    sucursal: parseInt(strResult[1]),
    username,
    zona: parseInt(zona.dataValues.ZONA)
  }
}