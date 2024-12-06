import { User } from './User'
import React from 'react'

interface AuthI {
  sucursal: number;
  username: string;
  zona: number;
}

export interface ProfileI {
  user:         User;
  sucursal:     Sucursal;
  infCategoria: InfCategoria;
}

export interface InfCategoria {
  CATEGORIZACION: string;
}

export interface Sucursal {
  ZONA:       string;
  CODIGO:     string;
  NOMBRE:     string;
  DIRECCION:  string;
  SUPERVISOR: string;
}

export interface User {
  DOCUMENTO:   string;
  NOMBRES:     string;
  NOMBRECARGO: string;
}

export interface Historial {
  ANHO: number
  MES: number
  CATEGORIA: string
  VERSION: string
}


