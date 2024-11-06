import { User } from './User'
import React from 'react'

export interface Historial {
  ANHO: number
  MES: number
  CATEGORIA: string
  VERSION: string
}

export interface PdvInfo {
  CATEGORIA: string
  VERSION: string
  DIRECCION: string
  NOMBRE: string
  SUPERVISOR: string
  ZONA: string
}