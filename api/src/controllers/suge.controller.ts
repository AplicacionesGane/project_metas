import { Request, Response } from 'express';
import { SugModel } from '../models/sug.model';
import { Boletas } from '../models/boeltas.model';
import { fn } from 'sequelize';

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
