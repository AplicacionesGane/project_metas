import { MetaHoraSucursal } from '../controllers/horas.controller';
import { Router } from 'express';

export const RouteHoras = Router()

RouteHoras.get('/ventaxhora', MetaHoraSucursal)