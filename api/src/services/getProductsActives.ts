import { Ventaxhoras } from '../models/ventahoras';
import { fn } from 'sequelize';

export const getProductsActives = async (suc: string) => {
  const ventaxhoras = await Ventaxhoras.findAll({
    attributes: ['PRODUCTO_CODIGO'],
    where: {
      FECHA: fn('CURDATE'),
      SUCURSAL: suc
    },
    group: ['PRODUCTO_CODIGO']
  });

  return ventaxhoras;
}