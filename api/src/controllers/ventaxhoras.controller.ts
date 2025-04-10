import { Ventaxhoras } from '../models/ventahoras';
import { Request, Response } from 'express';
import { User } from '../types/interfaces';
import { QueryTypes } from 'sequelize';
import { z } from 'zod';

interface DataQueryHora {
  HORA: string;
  VENTA_HORA: number | string;
  PRODUCTO: string;
}

const paramsSchema = z.object({
  producto: z.string(),
});

enum HorasEnum {
  '06:00' = 6,
  '07:00' = 7,
  '08:00' = 8,
  '09:00' = 9,
  '10:00' = 10,
  '11:00' = 11,
  '12:00' = 12,
  '13:00' = 13,
  '14:00' = 14,
  '15:00' = 15,
  '16:00' = 16,
  '17:00' = 17,
  '18:00' = 18,
  '19:00' = 19,
  '20:00' = 20,
  '21:00' = 21,
  '22:00' = 22,
  '23:00' = 23,
}

const aspiracionxhora = [
  { id: 1, aspiracion: 8000 },
  { id: 2, aspiracion: 4000 },
  { id: 3, aspiracion: 7000 },
  { id: 4, aspiracion: 15000 },
  { id: 5, aspiracion: 12000 },
  { id: 6, aspiracion: 21000 },
  { id: 7, aspiracion: 13500 },
  { id: 8, aspiracion: 18000 },
  { id: 9, aspiracion: 15000 },
  { id: 10, aspiracion: 8000 },
  { id: 11, aspiracion: 9500 },
  { id: 12, aspiracion: 12500 },
  { id: 13, aspiracion: 14500 },
  { id: 14, aspiracion: 16500 },
]

export const ventaxhorasController = async (req: Request, res: Response) => {
  const { success, data, error } = paramsSchema.safeParse(req.query);
  const { zona, sucursal } = req.user as User

  if (!success) {
    res.status(400).json({ message: 'Invalid query parameters', error });
    return
  }

  try {
    const results = await Ventaxhoras.sequelize?.query<DataQueryHora>(`
      SELECT 
        VH.HORA, 
        SUM(VH.VTAH) AS VENTA_HORA,
        P.VERSION AS PRODUCTO
      FROM 
        VENTAHORAPRODUCTOS AS VH
      LEFT JOIN 
        PRODUCTOS AS P 
      ON 
        (P.CODIGO = VH.PRODUCTO_CODIGO)
      WHERE VH.FECHA = CURDATE() 
      AND VH.SUCURSAL = ? 
      AND P.VERSION = ?
      AND VH.ZONA = ?
      AND VH.HORA BETWEEN 6 AND 23
      GROUP BY VH.HORA;
      `,
      { replacements: [sucursal, data.producto.toUpperCase(), zona], type: QueryTypes.SELECT, }
    )


    if (!results) {
      res.status(404).json({ message: 'No data found' });
      return
    }

    const mappedResults = results.map((res, index) => {
      return {
        id: index + 1,
        hora: HorasEnum[res.HORA as keyof typeof HorasEnum],
        ventaHora: parseInt(res.VENTA_HORA.toString()),
        producto: res.PRODUCTO
      }
    })

    // agregar la aspiracion a cada hora x id y agregar la venta acomulada sumando la ventaHora anterior
    const mappedResultsWithAspiracion = mappedResults.map((res, index) => {
      return {
        ...res,
        ventaAcumulada: mappedResults.slice(0, index + 1).reduce((acc, curr) => acc + curr.ventaHora, 0),
        aspiracion: aspiracionxhora[index].aspiracion
      }
    })

    res.status(200).json(mappedResultsWithAspiracion);
    return
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}