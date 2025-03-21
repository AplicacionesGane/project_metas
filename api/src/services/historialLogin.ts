import { HistLogin } from '../models/histLoginPowerbi';
import { fn, literal } from 'sequelize';

export const HistLoginRegister = async (username: string, sucursal: number) => {
  //TODO: Insertar un dato de login si no existe en la tabla de historialLogin del día actual con la función CURDATE
  try {
    const histLogin = await HistLogin.findOne({
      where: { USERNAME: username, SUCURSAL: sucursal, FECHA_LOGIN: fn('CURDATE') }
    });

    if (!histLogin) {
      await HistLogin.create({
        USERNAME: username,
        SUCURSAL: sucursal
      });
      console.log('Registro de login insertado');
    } else {
      const updateNumber = histLogin.dataValues.VERSION === 0 ? 1 : 0;
      await HistLogin.update({ VERSION: updateNumber }, {
        where: { USERNAME: username, SUCURSAL: sucursal, FECHA_LOGIN: literal('CURDATE()') }
      })
      console.log('Registro de login actualizado');
    }
  } catch (error) {
    console.error('Error al insertar el registro de login:', error);
  }
}