import { ReturnCompanyAtributesMetProducts, ReturnArrayMetProducts } from '../utils/fnMetasProducts'
import { ReturnCompanyAtriCumMesActu, ReturArrayCumpMesActProducts } from '../utils/fnCumMesAct'

import { MetasMesActProd } from '../models/ventaMesActProd.model'
import { MetasProducts } from '../models/metasproducts.model'
import { vtaMesAntCump } from '../models/vtaMesAntPro.model'

import { getVentaActualProductos, getAspiracionDiaActual } from '../services/metadiaresumen'
import { calcularPorcentaje } from '../utils/funtionsReutilizables'
import { Utilidades } from '../models/utilidades.model'
import { Request, Response } from 'express'
import { escape } from 'querystring'
import { fn } from 'sequelize'
import { z } from 'zod'

const validInfo = z.object({
  codigo: z.string().transform(c => parseInt(c)),
  zona: z.string().transform(c => parseInt(c)),
})

export const metasDelDia = async (req: Request, res: Response) => {
  const { success, data, error } = validInfo.safeParse(req.body)

  if (!success) return res.status(400).json({ message: 'Se requiere número de sucursal y zona', error })

  const { codigo, zona } = data

  if (!codigo && !zona) return res.status(400).json({ message: 'Se requiere número de sucursal y zona' })

  try {
    const ventaActual = await getVentaActualProductos(codigo, zona)
    const aspiracionDia = await getAspiracionDiaActual(codigo, zona)

    const porcentajeCumplimiento = calcularPorcentaje(ventaActual, aspiracionDia)

    return res.status(200).json({ ventaActual, aspiracionDia, cumplimiento: porcentajeCumplimiento })
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las metas', error })
  }
}

export const cumplimientoDiaProducto = async (req: Request, res: Response) => {
  const { codigo, zona } = req.query
  if (!codigo || !zona) return res.status(400).json({ error: 'Falta el código del punto de venta' })
  if (zona !== '39627' && zona !== '39628') return res.status(400).json({ error: 'Zona invalida ' })

  try {
    await MetasProducts.sync() // SINCRONIZA MODELO
    const metas = await MetasProducts.findOne({
      attributes: ReturnCompanyAtributesMetProducts(zona), // select * {} 
      where: { SUCURSAL: escape(codigo as string), FECHA: fn('CURDATE') }
    })

    if (!metas) return res.status(404).json({ error: 'No se encontraron metas para el código y zona proporcionados' })

    const result = ReturnArrayMetProducts(zona, metas?.dataValues)

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Hubo un problema al obtener el cumplimiento del día por producto. Por favor, inténtalo de nuevo más tarde.' })
  }
}

export const cumplimientoMesActualProducto = async (req: Request, res: Response) => {
  const { codigo, zona } = req.query
  if (!codigo || !zona) return res.status(400).json({ error: 'Falta el código del punto de venta' })
  if (zona !== '39627' && zona !== '39628') return res.status(400).json({ error: 'Zona invalida ' })

  try {
    await MetasMesActProd.sync()
    const metasMesAct = await MetasMesActProd.findOne({
      attributes: ReturnCompanyAtriCumMesActu(zona),
      where: { SUCURSAL: escape(codigo as string), ZONA: escape(zona as string), FECHA: fn('CURDATE') }
    })

    const result = ReturArrayCumpMesActProducts(zona, metasMesAct?.dataValues)

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Hubo un problema al obtener el cumplimiento del mes actual por producto. Por favor, inténtalo de nuevo más tarde.' })
  }
}

export const vtaMesAntPro = async (req: Request, res: Response) => {
  const { codigo, zona } = req.query
  if (!codigo || !zona) return res.status(400).json({ error: 'Falta el código del punto de venta' })
  if (zona !== '39627' && zona !== '39628') return res.status(400).json({ error: 'Zona invalida ' })

  // TODO: en la bd el mes 1 es enero, pero en js el mes 0 es enero, por lo que se debe hacer un ajuste para traer el mes anterior
  let getMesAnt = new Date().getMonth()
  if (getMesAnt === 0) getMesAnt = 12

  try {
    await vtaMesAntCump.sync()

    const metasMesAnt = await vtaMesAntCump.findOne({
      attributes: ReturnCompanyAtriCumMesActu(zona),
      where: { SUCURSAL: escape(codigo as string), ZONA: escape(zona as string), MES: getMesAnt }
    })

    const result = ReturArrayCumpMesActProducts(zona, metasMesAnt?.dataValues)

    return res.status(200).json(result)

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Hubo un problema al obtener el cumplimiento del mes anterior por producto. Por favor, inténtalo de nuevo más tarde.' })
  }
}

export const getUtilidades = async (req: Request, res: Response) => {
  const { cedula } = req.params as { cedula: string }

  if (!cedula) {
    return res.status(400).json({ error: 'Falta el cédula' })
  }

  try {
    const data = await Utilidades.findAll({
      where: { DOCUMENTO: cedula },
      order: [['FECHA', 'DESC']],
      limit: 3
    })
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Error al consultar Table' })
  }
}

