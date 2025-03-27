import { registerSalida } from '../controllers/salida.controller';
import { authenticateToken } from '../middleware/verifyToken';
import { Router } from 'express';

export const routerSalida = Router()

routerSalida.post('/salida', authenticateToken, registerSalida)