import { InfoPdv } from '../models/info.model';
import{ Request, Response } from 'express';

export async function getPdvCod(req: Request, res: Response) {
  const { codigo } = req.body;

  if (!codigo) {
    return res.status(400).json({ message: 'Código no encontrado' });
  }

  try {
    const pdv = await InfoPdv.findOne({ 
      attributes: ['NOMBRE', 'SUPERVISOR', 'DIRECCION', 'CATEGORIA', 'VERSION', 'ZONA'],
      where: { CODIGO: codigo } 
    });

    if (!pdv) {
      return res.status(404).json({ message: 'Punto de venta no encontrado' });
    }

    return res.status(200).json(pdv);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
}