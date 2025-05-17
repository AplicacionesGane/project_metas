import { Request, Response } from "express";

export const reportPremio = async (req: Request, res: Response) => {
  // here can be create validate zod schema to verify the data
  const { maquinaId, valor } = req.body

  if (!maquinaId || !valor) {
    return res.status(400).json({ error: 'Faltan datos para crear el reporte' })
  }

  try {
    console.log(req.body);
    console.log(req.user);
    
    res.status(201).json({ message: 'Reporte creado correctamente' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al crear el reporte' })
  }
}
