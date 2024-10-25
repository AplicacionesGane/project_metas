import { HorasBySucursal } from '../controllers/horas.controller';
import { Router } from 'express';

export const RouteHoras = Router()

RouteHoras.get('/horas/:id/:producto', HorasBySucursal)