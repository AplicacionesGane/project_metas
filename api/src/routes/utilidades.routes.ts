import { Router } from "express";
import { getUtilidades } from "../controllers/metas.controller";

export const RouteUtilidades = Router()

RouteUtilidades.get('/utilidades/:cedula', getUtilidades)