import { registerSalida } from '../controllers/salida.controller';
import { Router } from 'express';

export const routerSalida = Router()

routerSalida.post('/salida', registerSalida)