import { MetaxHora } from '../models/metas_70.model';
import { Request, Response } from 'express'
import { fn, Op } from 'sequelize';
import { z } from 'zod';

const MetaxHoraInterface = z.object({
  producto: z.string().min(2),
  sucursal: z.string().min(2)
})

export const MetaHoraSucursal = async (req: Request, res: Response) => {
 const params = req.query

 const { success, data, error } = MetaxHoraInterface.safeParse(params)

  if (!success) {
    res.status(400).json({ error: error.format() })
    return 
  }

  try {
    const metasxhoras = await MetaxHora.findAll({
      where: {
        producto: { [Op.like]: `%${data.producto.toUpperCase()}%` },
        sucursal: data.sucursal
      }
    })

    res.status(200).json(metasxhoras)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}