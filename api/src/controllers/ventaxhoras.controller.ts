import { Ventaxhoras } from '../models/ventahoras';
import { Request, Response } from 'express';
import { User } from '../types/interfaces';
import { QueryTypes } from 'sequelize';
import { z } from 'zod';

interface DataQueryHora {
  HORA: string;
  VENTA: number;
  PRODUCTO_ID: string;
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
  { id: 6, aspiracion: 8000 },
  { id: 7, aspiracion: 4000 },
  { id: 8, aspiracion: 7000 },
  { id: 9, aspiracion: 15000 },
  { id: 10, aspiracion: 12000 },
  { id: 11, aspiracion: 21000 },
  { id: 12, aspiracion: 13500 },
  { id: 13, aspiracion: 18000 },
  { id: 14, aspiracion: 15000 },
  { id: 15, aspiracion: 8000 },
  { id: 16, aspiracion: 9500 },
  { id: 17, aspiracion: 12500 },
  { id: 18, aspiracion: 14500 },
  { id: 19, aspiracion: 16500 },
  { id: 20, aspiracion: 16500 },
  { id: 21, aspiracion: 16500 },
  { id: 22, aspiracion: 16500 },
]

export const ventaxhorasController = async (req: Request, res: Response) => {
  const { success, data, error } = paramsSchema.safeParse(req.query);
  const { zona, sucursal } = req.user as User

  if (!success) {
    res.status(400).json({ message: 'Invalid query parameters', error });
    return
  }

  const horaActual = new Date().getHours() - 1;

  try {
    const results = await Ventaxhoras.sequelize?.query<DataQueryHora>(`
        SELECT 
          VH.HORA,
          SUM(VH.VTAPH) AS VENTA
        FROM VENTAHORAPRODUCTOS AS VH
        JOIN PRODUCTOS AS P ON (VH.PRODUCTO_CODIGO = P.CODIGO)
        WHERE VH.FECHA = CURDATE() 
          AND VH.SUCURSAL = ?
          AND VH.ZONA = ?
          AND P.VERSION = ?
          AND VH.HORA BETWEEN 6 AND ?
        GROUP BY HORA
      `,
      { replacements: [sucursal, zona, data.producto, horaActual], type: QueryTypes.SELECT, }
    )

    if (!results) {
      res.status(404).json({ message: 'No data found' });
      return
    }

    const mapedResults = results.map( (item, index) => {
      const hora = item.HORA as keyof typeof HorasEnum;
      const aspiracion = aspiracionxhora.find((asp) => asp.id === parseInt(item.HORA) ? asp.aspiracion : 0)

      return {
        id: index + 1,
        Hora: HorasEnum[hora],
        aspiracion: aspiracion?.aspiracion,
        venta: parseInt(item.VENTA.toString())
      }
    })

    console.log(mapedResults);

    res.status(200).json('ok');
    return
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}