import { HistLogin } from '../models/histLoginPowerbi';
import { fn } from 'sequelize';

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
    } else {
      console.log(histLogin);
      console.log('Ya existe un registro de login para el usuario para el día de hoy');
    }
  } catch (error) {
    console.error('Error al insertar el registro de login:', error);
  }
}