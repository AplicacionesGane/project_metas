import { SugeridosVendedorPB } from '../models/SugeridosVendedorPB';
import { Request, Response } from 'express';
import { User } from '../types/interfaces';
import { fn } from 'sequelize';

export const SugNewPowerBi = async (req: Request, res: Response) => {
  try {
    const { sucursal: codigo, username, } = req.user as User

    const result = await SugeridosVendedorPB.findAll({
      attributes: ['ID', 'PRODUCTO', 'VTA_SUGERIDO', 'META_VALOR', 'ESTADO'],
      where: {
        SUCURSAL: codigo,
        FECHA: fn('CURDATE'),
        LOGIN: username
      }
    })

    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Hubo un problema al obtener los sugeridos. Por favor, inténtalo de nuevo más tarde.' })
  }
}