import { User } from './User'
import React from 'react'

export interface Historial {
  ANHO: number
  MES: number
  CATEGORIA: string
  VERSION: string
}

interface SucursalInfo {
  ZONA: string
  NOMBRE: string
  DIRECCION: string
  SUPERVISOR: string
}

interface UserI {
  DOCUMENTO: string
  NOMBRES: string
  NOMBRECARGO: string
}

interface InfoGeneralI {
  user: UserI
  sucursal: SucursalInfo
  codigo: string
}