import { Horas } from '../models/metas_70.model';
import { Request, Response } from 'express'
import { fn, Op } from 'sequelize';


export const HorasBySucursal = async (req: Request, res: Response) => {
  const { id, producto } = req.params

  if (!id || !producto) {
    return res.status(400).json({ message: 'Falta el código del punto de venta y/o producto' })
  }

  try {
    const result = await Horas.findAll({
      attributes: ['id', 'hora', `${producto}`],
      where: {
        sucursal: id,
        fecha: { [Op.and]: { [Op.eq]: fn('CURDATE') } }
      }
    })

    if (!result) {
      return res.status(404).json({ message: 'No se encontraron horas para la sucursal' })
    }

    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener las horas de la sucursal. Por favor, inténtalo de nuevo más tarde.' })
  }
}