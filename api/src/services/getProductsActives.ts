import { Ventaxhoras } from '../models/ventahoras';
import { PRODUCTOS_DATA } from '../utils/constants';
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

  const productosActivos = ventaxhoras.map((producto) => {
    const productoData = PRODUCTOS_DATA.find((p) => p.codigos.includes(producto.PRODUCTO_CODIGO));
    return productoData ? productoData.nombre : null;
  });

  const productosUnicos = [...new Set(productosActivos)];

  return productosUnicos;
}