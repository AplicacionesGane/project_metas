import { powerBi } from '../connections/powerbi';
import { Request, Response } from 'express';
import { User } from '../types/interfaces';
import { QueryTypes } from 'sequelize'

export interface ResultsProcedure {
  ZONA: string;
  HORA: number;
  SUCURSAL: number;
  PDISTRIB: string;
  VTAH: string;
  FRMH: string;
  PROM_DIASEMANA: string;
  METAH: string;
}

export const ventaxhorasController = async (req: Request, res: Response) => {
  const { sucursal } = req.user as User

  if (!sucursal) {
    res.status(400).json({ message: 'Invalid query parameters in token', sucursal });
    return
  }

  try {
    const query = 'CALL PRD_METASHORAXSUCURSAL_V(?);'
    
    const results = await powerBi.query<ResultsProcedure[]>(query, {
      replacements: [sucursal],
      type: QueryTypes.SELECT
    })

    const beforeHour = new Date().getHours() - 1

    const parsedResults = Object.values(results[0])
      .filter((item: ResultsProcedure) => item.HORA >= 5 && item.HORA <= beforeHour)
      .map((item: ResultsProcedure, index: number) => ({
        ID: index + 1,
        HORA: `${item.HORA}:00`,
        VTAH: parseInt(item.VTAH),
        METAH: parseInt(item.METAH),
        DIF: parseInt(item.VTAH) - parseInt(item.METAH)
      }));

    res.status(200).json(parsedResults);
    return
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}