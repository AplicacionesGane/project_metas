import { HistModel } from '../models/hist.model'

import { Request, Response } from "express"
import { escape } from 'querystring'

export async function HistCat(req: Request, res: Response) {
  const { codigo } = req.query
  if (!codigo) return res.status(400).json({ error: 'Falta el código del punto de venta' })

  try {
    await HistModel.sync()
    const historial = await HistModel.findAll({
      attributes: ['ANHO', 'MES', 'CATEGORIA', 'VERSION'],
      where: { SUCURSAL: escape(codigo as string) }
    })

    return res.status(200).json(historial)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener el historial de categorías. Por favor, inténtalo de nuevo más tarde.' })
  }
}