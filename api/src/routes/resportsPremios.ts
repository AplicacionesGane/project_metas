import { authenticateToken } from "../middleware/verifyToken";
import { reportPremio } from "../controllers/reportsPremios"
import { Router } from "express";

export const routerPremios = Router()

// endpoint para crear reporte de premios verify token middleware add
routerPremios.post('/reportPremio', authenticateToken, reportPremio)

