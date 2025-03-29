import { SugNewPowerBi } from '../controllers/suge.controller'
import { authenticateToken } from '../middleware/verifyToken';
import { Router } from 'express'

export const RouteSuge = Router()

RouteSuge.get('/sugeridos', authenticateToken, SugNewPowerBi)
