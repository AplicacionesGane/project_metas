import { HistRegisSalida } from '../models/histRegisSalida';
import { Request, Response } from "express";
import { User } from '../types/interfaces';

export const registerSalida = async (req: Request, res: Response) => {
  const TIPO = 'SALIDA';
  const FECHA_LOGOUT = new Date();
  const BLOQREG = 1;

  const { sucursal: codigo, username } = req.user as User

  try {
    const result = await HistRegisSalida.create({
      TIPO,
      USERNAME: username.split('CV')[1],
      SUCURSAL: codigo,
      FECHA_LOGOUT,
      BLOQREG
    })

    if (!result) {
      res.status(400).json({
        message: 'Error al registrar la salida',
      })
      return
    }

    res.status(200).json({
      message: 'Registro de salida exitoso',
      time: result.dataValues.FECHACREATE?.toLocaleDateString() + ' -- ' + result.dataValues.FECHACREATE?.toLocaleTimeString()
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al registrar la salida'
    })
  
  }
}
