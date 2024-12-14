import { getUtilidades } from '../controllers/metas.controller';
import { Router } from 'express';

export const RouteUtilidades = Router()

RouteUtilidades.get('/utilidades/:cedula', getUtilidades)