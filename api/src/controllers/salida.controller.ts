import { HistRegisSalida } from '../models/histRegisSalida';
import { Request, Response } from "express";

export const registerSalida = async (req: Request, res: Response) => {
  const { tipo, username, sucursal, fecha_logout, bloqreg } = req.body;

  try {
    const result = await HistRegisSalida.create({
      TIPO: tipo,
      USERNAME: username,
      SUCURSAL: sucursal,
      FECHA_LOGOUT: fecha_logout,
      BLOQREG: bloqreg
    })

    console.log(result);

    res.status(200).json({
      message: 'Registro de salida exitoso'
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al registrar la salida'
    })
  
  }
}
