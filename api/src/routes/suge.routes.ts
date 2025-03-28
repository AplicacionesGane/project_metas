import { SugeridosPrimeraConsulta, SugeridosSegundaConsulta, BoletasGanadas, SugNewPowerBi } from '../controllers/suge.controller'
import { authenticateToken } from '../middleware/verifyToken';
import { Router } from 'express'

export const RouteSuge = Router()

RouteSuge.post('/SugeridosPrimeraConsulta', SugeridosPrimeraConsulta)

RouteSuge.post('/SugeridosSegundaConsulta', SugeridosSegundaConsulta)

RouteSuge.post('/boletasGanadas', BoletasGanadas)

RouteSuge.get('/sugeridos', authenticateToken, SugNewPowerBi)