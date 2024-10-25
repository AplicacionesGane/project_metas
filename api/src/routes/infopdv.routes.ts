import { getPdvCod } from '../controllers/info.controller'
import { Router } from "express";

export const infopdvRouter = Router();

infopdvRouter.post('/infopdv', getPdvCod)