import { HistCat } from '../controllers/hist.controller'
import { Router } from 'express';

export const RouteHist = Router()

RouteHist.get('/historial', HistCat)
