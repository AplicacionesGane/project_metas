import { MetaxHora } from '../models/metas_70.model';
import { Request, Response } from 'express'
import { Op } from 'sequelize';
import { z } from 'zod';

const MetaxHoraInterface = z.object({
  producto: z.string().min(2),
  sucursal: z.string().min(2)
})

const estimado = {
  hora6: 0,
  hora7: 10000,
  hora8: 20000,
  hora9: 30000,
  hora10: 20000,
  hora11: 20000,
  hora12: 10000,
  hora13: 5000,
  hora14: 2000,
  hora15: 3000,
  hora16: 7000,
  hora17: 10000,
  hora18: 8000,
  hora19: 40000,
  hora20: 3000,
  hora21: 2000,
  hora22: 1000,
  hora23: 500,
}

interface ObjectEsperado {
  venta: number;
  hora: string;
  estimado: number;
}

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
  
    // Object.entries(horas).find(([_, value]) => value === 0)?.[0]
  
    const crearNuevaMeta = () => {
      const nuevaMeta: ObjectEsperado[] = []
      for (const [key, value] of Object.entries(estimado)) {
        const meta = metasxhoras.map((meta) => {
    
          return {
            venta: meta.dataValues[key as keyof typeof meta.dataValues] || 0,
            hora: key,
            estimado: value
          } as ObjectEsperado
        })
        nuevaMeta.push(...meta)
      }
      return nuevaMeta
    }

    const nuevaMeta = crearNuevaMeta()

    res.status(200).json(nuevaMeta)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}