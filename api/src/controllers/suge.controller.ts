import { SugeridosVendedorPB } from '../models/SugeridosVendedorPB';
import { Boletas } from '../models/boeltas.model';
import { SugModel } from '../models/sug.model';
import { Request, Response } from 'express';
import { User } from '../types/interfaces';
import { fn } from 'sequelize';

// Función para procesar productos duplicados
const processDuplicatedProducts = (data: any[]) => {
  const productMap = new Map<string, any>(); // Mapa para rastrear productos únicos

  data.forEach((item) => {
    const { PRODUCTO, META_VALOR, ID } = item.dataValues;

    if (productMap.has(PRODUCTO)) {
      // Si el producto ya existe, duplicamos el META_VALOR del producto anterior
      const existingProduct = productMap.get(PRODUCTO);

      if (ID > existingProduct.ID) {
        item.dataValues.META_VALOR = existingProduct.META_VALOR * 2; // Duplicamos el valor
      }
    } else {
      // Si el producto no existe, lo agregamos al mapeo
      productMap.set(PRODUCTO, item.dataValues);
    }
  });

  return data;
};

const Sug = async (codigo: number, user: string) => {
  const consulta = await SugModel.findOne({
    attributes: ['SUGERIDO1', 'META_SUG1', 'VTA_CHANCE', 'VTA_PAGAMAS', 'VTA_PAGATODO', 'VTA_GANE5', 'VTA_PATA_MILLONARIA', 'VTA_DOBLECHANCE', 'VTA_CHANCE_MILLONARIO'],
    where: {
      FECHA: fn('CURDATE'),
      SUCURSAL: codigo,
      USUARIO: user
    }
  })

  return consulta
}

export const SugeridosPrimeraConsulta = async (req: Request, res: Response) => {
  const { codigo, user } = req.body

  if (!codigo || !user) {
    return res.status(400).json({ message: 'Por favor, complete todos los campos.' })
  }

  try {
    const cumplimiento = await Sug(codigo, user)

    if (!cumplimiento) {
      return res.status(404).json({ message: `No se generaron sugeridos para el usuario ${user.slice(2)} por el momento, validar en 5 min.` })
    }

    const sum = cumplimiento.dataValues.VTA_CHANCE + cumplimiento.dataValues.VTA_PAGAMAS +
      cumplimiento.dataValues.VTA_PAGATODO + cumplimiento.dataValues.VTA_GANE5 +
      cumplimiento.dataValues.VTA_PATA_MILLONARIA + cumplimiento.dataValues.VTA_DOBLECHANCE +
      cumplimiento.dataValues.VTA_CHANCE_MILLONARIO

    return res.status(200).json({ SUGERIDO1: cumplimiento.dataValues.SUGERIDO1, VTA_SUGERIDO: sum, META_SUG1: cumplimiento.dataValues.META_SUG1 })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener los sugeridos de la primera consulta. Por favor, inténtalo de nuevo más tarde.' })
  }
}

export const SugeridosSegundaConsulta = async (req: Request, res: Response) => {
  const { codigo, user } = req.body

  if (!codigo || !user) {
    return res.status(400).json({ message: 'Por favor, complete todos los campos.' })
  }

  try {
    const cumplimiento = await Sug(codigo, user)

    if (!cumplimiento) {
      return res.status(404).json({ message: `No se generaron sugeridos para el usuario ${user.slice(2)} por el momento, validar en 5 min.` })
    }

    const sum = cumplimiento.dataValues.VTA_CHANCE + cumplimiento.dataValues.VTA_PAGAMAS +
      cumplimiento.dataValues.VTA_PAGATODO + cumplimiento.dataValues.VTA_GANE5 +
      cumplimiento.dataValues.VTA_PATA_MILLONARIA + cumplimiento.dataValues.VTA_DOBLECHANCE +
      cumplimiento.dataValues.VTA_CHANCE_MILLONARIO

    return res.status(200).json({ SUGERIDO1: cumplimiento.dataValues.SUGERIDO1, VTA_SUGERIDO: sum, META_SUG1: cumplimiento.dataValues.META_SUG1 * 2 })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener los sugeridos de la primera consulta. Por favor, inténtalo de nuevo más tarde.' })
  }
}

export const BoletasGanadas = async (req: Request, res: Response) => {
  const { codigo, user } = req.body

  console.log(codigo, user);

  if (!codigo || !user) {
    return res.status(400).json({ message: 'Por favor, complete todos los campos.' })
  }

  try {
    const cumplimiento = await Boletas.findOne({ where: { FECHA: fn('CURDATE'), SUCURSAL: codigo, USUARIO: user } })

    const SUM = cumplimiento?.dataValues.CUMPLIMIENTO! + cumplimiento?.dataValues.CUMPLIMIENTO2! + cumplimiento?.dataValues.CUMPLIMIENTO3!

    return res.status(200).json({ boletas: SUM })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener las boletas ganadas. Por favor, inténtalo de nuevo más tarde.' })
  }
}

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