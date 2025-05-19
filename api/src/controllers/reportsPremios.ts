import { AutorizaTransacciones } from '../models/autorizatransacciones';
import { Request, Response } from "express";
import { User } from "../types/interfaces";
import { fn } from "sequelize";

// pending to validate 
export const getReportPremios = async (req: Request, res: Response) => {
  const { sucursal } = req.user as User

  if (!sucursal) return res.status(400).json({ error: 'Falta la sucursal o existe un error valida ingreso de nuevo' })

  try {
    await AutorizaTransacciones.sync()
    const results = await AutorizaTransacciones.findAll({
      where: {
        SUCURSAL: sucursal,
        CONCEPTO: 'PREMIO',
        FECHA: fn('CURDATE')
      }
    })

    const formattedResultsTime = results.map((result) => ({
      ...result.dataValues,
      FECHACREATE: result.dataValues.FECHACREATE?.toLocaleDateString() + ' ' + result.dataValues.FECHACREATE?.toLocaleTimeString(),
      FECHAUPDATE: result.dataValues.FECHAUPDATE?.toLocaleDateString() + ' ' + result.dataValues.FECHAUPDATE?.toLocaleTimeString()
    }))

    return res.status(200).json(formattedResultsTime)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al obtener los reportes de premios' })
  }
}

export const reportPremio = async (req: Request, res: Response) => {
  // here can be create validate zod schema to verify the data
  const { maquinaId, valor } = req.body
  const { username, sucursal } = req.user as User

  if (!maquinaId || !valor) {
    return res.status(400).json({ error: 'Faltan datos para crear el reporte' })
  }

  const fecha = new Date()

  try {
    await AutorizaTransacciones.sync()
    const newReport = await AutorizaTransacciones.create({
      SUCURSAL: sucursal.toString(),
      LOGINSOLICITUD: username.split('CV')[1],
      TERCERO: maquinaId.toString(),
      CONCEPTO: 'PREMIO',
      VALOR: parseInt(valor, 10),
      ESTADO: 'PENDIENTE',
      FECHA: fecha
    })

    if (!newReport) {
      return res.status(400).json({ error: 'Error al crear el reporte' })
    }
    
    res.status(201).json({ message: 'Reporte creado correctamente' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al crear el reporte' })
  }
}
