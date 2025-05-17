import { authenticateToken } from "../middleware/verifyToken";
import { reportPremio, getReportPremios } from "../controllers/reportsPremios"
import { Router } from "express";

export const routerPremios = Router()

// endpoint para crear reporte de premios verify token middleware add
routerPremios.post('/reportPremio', authenticateToken, reportPremio)

routerPremios.get('/reportPremios', authenticateToken, getReportPremios)