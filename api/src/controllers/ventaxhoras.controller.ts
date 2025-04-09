import { Ventaxhoras } from '../models/ventahoras';
import { Productos } from '../models/productospwbi';
import { Request, Response } from 'express';
import { fn, Op } from 'sequelize';

export const ventaxhorasController = async (req: Request, res: Response) => {
  try {
    const results = await Ventaxhoras.findAll({
      attributes: ['HORA', 'LOGIN', 'VTAH', 'VTAPH', 'ASPIRACIONH'],
      include: [
        {
          model: Productos,
          attributes: ['NOMBRE', 'CATEGORIACOMERCIAL', 'VERSION'], 
          where: {
            VERSION: { [Op.ne]: '0' },
          },
        },
      ],
      where: {
        SUCURSAL: 39825,
        FECHA: fn('CURDATE'),
      },
    });

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}