import { ReturnCompanyAtributesMetProducts, ReturnArrayMetProducts } from '../utils/fnMetasProducts'
import { ReturnCompanyAtriCumMesActu, ReturArrayCumpMesActProducts } from '../utils/fnCumMesAct'

import { MetasMesActProd } from '../models/ventaMesActProd.model'
import { MetasProducts } from '../models/metasproducts.model'
import { vtaMesAntCump } from '../models/vtaMesAntPro.model'

import { calcularPorcentaje } from '../utils/funtionsReutilizables'
import { Utilidades } from '../models/utilidades.model'
import { Request, Response } from "express"
import { escape } from 'querystring'
import { fn } from "sequelize"

export const metasDelDia = async (req: Request, res: Response) => {
  const { codigo } = req.body

  if (!codigo) return res.status(400).json({ message: 'Faltan codigo' })

  // !!: Revisar codigo ya que es posible una sql injection en la variable codigo se debe intentar escapar y/o validar sanitizar ...
  // TODO: por el momento se usara escape de querystring sin emabrgo toca mejorar este aspecto en el futuro

  try {
    await MetasProducts.sync()
    const metaDiaProdc = await MetasProducts.findOne({
      attributes: ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO'],
      where: { SUCURSAL: escape(codigo), FECHA: fn('CURDATE') }
    })

    if (!metaDiaProdc) return res.status(404).json({ message: 'No se encontraron metas para el codigo y fecha proporcionados' })

    // TODO: mejorar esta logica se podria crear una funcion reutilizable para sumar los productos
    const sumaProducts = (
      metaDiaProdc.dataValues.CHANCE + metaDiaProdc.dataValues.PAGAMAS +
      metaDiaProdc.dataValues.PAGATODO + metaDiaProdc.dataValues.GANE5 +
      metaDiaProdc.dataValues.PATA_MILLONARIA + metaDiaProdc.dataValues.DOBLECHANCE +
      metaDiaProdc.dataValues.CHANCE_MILLONARIO
    )

    const ventaActual = await MetasProducts.findOne({
      attributes: ['PROMEDIO_DIARIO_CHANCE', 'PROMEDIO_DIARIO_PAGAMAS', 'PROMEDIO_DIARIO_PAGATODO', 'PROMEDIO_DIARIO_GANE5', 'PROMEDIO_DIARIO_PATAMI', 'PROMEDIO_DIARIO_DOBLECHANCE', 'PROMEDIO_DIARIO_CHMILL'],
      where: { SUCURSAL: escape(codigo), FECHA: fn('CURDATE') }
    })

    const aspiracionDia = (
      ventaActual?.dataValues.PROMEDIO_DIARIO_CHANCE + ventaActual?.dataValues.PROMEDIO_DIARIO_PAGAMAS +
      ventaActual?.dataValues.PROMEDIO_DIARIO_PAGATODO + ventaActual?.dataValues.PROMEDIO_DIARIO_GANE5 +
      ventaActual?.dataValues.PROMEDIO_DIARIO_PATAMI + ventaActual?.dataValues.PROMEDIO_DIARIO_DOBLECHANCE +
      ventaActual?.dataValues.PROMEDIO_DIARIO_CHMILL
    )

    const porcentajeCumplimiento = calcularPorcentaje(sumaProducts, aspiracionDia)

    return res.status(200).json({ venta_actual: sumaProducts, aspiracion: aspiracionDia, cumplimiento: porcentajeCumplimiento })
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
  if(getMesAnt === 0) getMesAnt = 12

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

export const getUtilidades = async (req:Request, res:Response) => {
  const { cedula } = req.params as { cedula: string }

  if (!cedula) {
    return res.status(400).json({ error: 'Falta el cédula' })
  }

  try {
    const data = await Utilidades.findOne({ where: { cc_asesor: cedula } })
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Error al consultar Table' })
  }
}

