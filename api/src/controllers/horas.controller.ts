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

enum Horas {
  hora6 = '06:00',
  hora7 = '07:00',
  hora8 = '08:00',
  hora9 = '09:00',
  hora10 = '10:00',
  hora11 = '11:00',
  hora12 = '12:00',
  hora13 = '13:00',
  hora14 = '14:00',
  hora15 = '15:00',
  hora16 = '16:00',
  hora17 = '17:00',
  hora18 = '18:00',
  hora19 = '19:00',
  hora20 = '20:00',
  hora21 = '21:00',
  hora22 = '22:00',
  hora23 = '23:00'
}

interface ObjectEsperado {
  venta: number;
  hora: string;
  estimado: number,
  ventaEstaHora: number
}

export const MetaHoraSucursal = async (req: Request, res: Response) => {
 const params = req.query

 const { success, data, error } = MetaxHoraInterface.safeParse(params)

  if (!success) {
    res.status(400).json({ error: error.format() })
    return 
  }

  try {
    const metasxhoras = await MetaxHora.findOne({
      where: {
        producto: { [Op.like]: `%${data.producto.toUpperCase()}%` },
        sucursal: data.sucursal
      }
    })

    if(!metasxhoras) {
      res.status(404).json("No se encontraron resultados para este producto :'C ")
      return
    }

    const crearNuevoArray = (): ObjectEsperado[] => {
      const nuevoArray: ObjectEsperado[] = [];
      let ventaAcumulada = 0; // Variable para almacenar la venta acumulada de la hora anterior
    
      for (const key of Object.keys(estimado)) {
        if (key !== 'id' && key !== 'producto' && key !== 'sucursal') {
          const ventaActual: number = metasxhoras[key]
          const estimadoActual = estimado[key as keyof typeof estimado]; // Estimado de la hora actual
          let ventaEstaHora: number;
          let venta: number;
    
          if (nuevoArray.length === 0) {
            // Primera hora: venta y ventaEstaHora son iguales a la venta actual
            ventaEstaHora = ventaActual;
            venta = ventaActual;
          } else {
            // Horas siguientes: ventaEstaHora es la diferencia entre la venta actual y la venta acumulada
            ventaEstaHora = Math.max(ventaActual - ventaAcumulada, 0);
            venta = ventaEstaHora;
          }
    
          // Actualizar la venta acumulada para la siguiente iteración
          ventaAcumulada = ventaActual;
    
          // Agregar el objeto al nuevo array
          nuevoArray.push({
            venta,
            hora: Horas[key as keyof typeof Horas], // Hora del enum
            estimado: estimadoActual, // Solo se incluye como referencia
            ventaEstaHora,
          });
        }
      }
    
      return nuevoArray;
    };

    const nuevoArray = crearNuevoArray()

    res.status(200).json(nuevoArray)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}