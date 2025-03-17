import { connectionOracle } from "../connections/oracledb";
import { Sucursal } from "../models/sucursalespw";

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

  if (strResult[0] === 'No data found') throw new Error('Usuario no encontrado o no existe');
  if (strResult[0] === 'FALSE' && strResult[2] === 'A') throw new Error('Contraseña incorrecta');
  if (strResult[0] === 'TRUE' && strResult[2] === 'B') throw new Error('Usuario se encuentra bloqueado');

  const zona = await Sucursal.findOne({
    attributes: ['ZONA'],
    where: { CODIGO: strResult[1] },
  })

  if (!zona) {
    throw new Error('No se encontro la zona de la sucursal en la base de datos powerbi')
  }

  // TODO: creamos el payload del token que es el usuario
  const user = {
    sucursal: parseInt(strResult[1]),
    username: username as string,
    zona: parseInt(zona.dataValues.ZONA)
  }

  return user
}