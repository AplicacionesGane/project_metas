import { SugeridosPrimeraConsulta, SugeridosSegundaConsulta, BoletasGanadas } from '../controllers/suge.controller'
import { Router } from 'express'

export const RouteSuge = Router()

RouteSuge.post('/SugeridosPrimeraConsulta', SugeridosPrimeraConsulta)

RouteSuge.post('/SugeridosSegundaConsulta', SugeridosSegundaConsulta)

RouteSuge.post('/boletasGanadas', BoletasGanadas)