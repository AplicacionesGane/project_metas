import { SugeridosVendedorPB } from '../models/SugeridosVendedorPB';
import { Boletas } from '../models/boeltas.model';
import { SugModel } from '../models/sug.model';
import { Request, Response } from 'express';
import { User } from '../types/interfaces';
import { fn } from 'sequelize';

// Función para procesar productos duplicados
const processDuplicatedProducts = (data: SugeridosVendedorPB[]) => {
  const productMap = new Map<string, { ID: number; META_VALOR: number }>();

  return data.map((item) => {
    const { PRODUCTO, META_VALOR, ID } = item.dataValues;

    if (productMap.has(PRODUCTO)) {
      const existingProduct = productMap.get(PRODUCTO)!;

      // Solo duplicar si el ID actual es mayor
      if (ID > existingProduct.ID) {
        productMap.set(PRODUCTO, { ID, META_VALOR: existingProduct.META_VALOR * 2 });
        return {
          ...item.dataValues,
          META_VALOR: existingProduct.META_VALOR * 2,
        };
      }
    } else {
      productMap.set(PRODUCTO, { ID, META_VALOR });
    }

    return item.dataValues;
  });
};

export const SugNewPowerBi = async (req: Request, res: Response) => {
  try {
    const { sucursal: codigo, username, } = req.user as User

    const result = await SugeridosVendedorPB.findAll({
      attributes: ['ID', 'PRODUCTO', 'VTA_SUGERIDO', 'META_VALOR', 'ESTADO'],
      where: {
        SUCURSAL: codigo,
        FECHA: fn('CURDATE'),
        LOGIN: username
      }
    })

    const processedResult = processDuplicatedProducts(result);

    res.status(200).json(processedResult);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Hubo un problema al obtener los sugeridos. Por favor, inténtalo de nuevo más tarde.' })
  }
}