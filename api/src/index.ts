import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan'
import cors from 'cors'

import { API_PORT, API_VERSION, API_URL_ORIGIN } from './config/enviroments';

import { RouteUtilidades } from './routes/utilidades.routes';
import { infopdvRouter } from './routes/infopdv.routes'
import { routerMetas } from './routes/metas.routes'
import { UserRouter } from './routes/user.routes';
import { RouteHist } from './routes/hist.routes'
import { RouteSuge } from './routes/suge.routes'
import { RouteHoras } from './routes/horas.routes';
import { routerSalida } from './routes/salida.routes';

const app = express();

// Usa cookie-parser middleware
app.use(cookieParser());

// Otras configuraciones de middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
  origin: API_URL_ORIGIN,
  credentials: true
}))

app.use(API_VERSION, UserRouter)
app.use(API_VERSION, infopdvRouter)
app.use(API_VERSION, routerMetas)
app.use(API_VERSION, RouteHist)
app.use(API_VERSION, RouteSuge)
app.use(API_VERSION, RouteHoras)
app.use(API_VERSION, RouteUtilidades)
app.use(API_VERSION, routerSalida)

app.get('/api/v1/dataTime', async (_req, res) => {
  try {
    const fecha = new Date().toLocaleDateString()
    res.json({ fecha })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener la fecha' })
  }
})

app.get('/api/v1/dataTime2', async (_req, res) => {
  try {
    const hora = new Date().toLocaleTimeString()
    res.json({ hora })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener la fecha' })
  }
})

app.listen(API_PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${API_PORT}`);
});
