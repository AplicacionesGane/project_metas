import { Ventaxhoras } from '../models/ventahoras';
import { Productos } from '../models/productospwbi';
import { Request, Response } from 'express';
import { fn } from 'sequelize';
import { z } from 'zod';

const paramsSchema = z.object({
  producto: z.string(),
});

export const ventaxhorasController = async (req: Request, res: Response) => {
  const { success, data, error } = paramsSchema.safeParse(req.query);

  if (!success) {
    res.status(400).json({ message: 'Invalid query parameters', error });
    return
  }

  try {
    const results = await Ventaxhoras.findAll({
      attributes: ['HORA', 'VTAH'],
      include: [{
        model: Productos,
        attributes: ['VERSION'],
        where: { VERSION: 'DOBLECHANCE' }
      }],
      where:{
        SUCURSAL: 39825,
        FECHA: fn('CURDATE'),
      }
    })

    const mapItems = results.map((item) => {
      const { HORA, VTAH } = item;
      return {
        HORA,
        VTAH
      }
    })

    // group by HORA and sum VTAH
    const groupedItems = mapItems.reduce((acc, item) => {
      const { HORA, VTAH } = item;
      if (!acc[HORA]) {
        acc[HORA] = { HORA, VTAH: 0 };
      }
      acc[HORA].VTAH += VTAH;
      return acc;
    }, {} as Record<string, { HORA: number; VTAH: number }>);

    
    res.status(200).json(groupedItems);
    return
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}