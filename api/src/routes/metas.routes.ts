import { metasDelDia, cumplimientoDiaProducto, cumplimientoMesActualProducto, vtaMesAntPro } from "../controllers/metas.controller";
import { authenticateToken } from '../middleware/verifyToken'
import { Router } from "express"; 

export const routerMetas = Router()

routerMetas.post('/metasDia', authenticateToken, metasDelDia)

routerMetas.get('/cumpDiaProd', authenticateToken, cumplimientoDiaProducto)

routerMetas.get('/cumpMesAct', authenticateToken, cumplimientoMesActualProducto)

routerMetas.get('/cumpMesAnt', authenticateToken, vtaMesAntPro)