import axios from 'axios'
import { Sugeridos } from '../types/Metas'

export const getSugeridos1 = async (codigo: number, username: string, zona: number ) => {
  const response = await axios.post('/SugeridosPrimeraConsulta', { codigo, user: username, zona })
  return response.data as Sugeridos
}

export const getSugeridos2 = async (codigo: number, username: string, zona: number ) => {
  const response = await axios.post('/SugeridosSegundaConsulta', { codigo, user: username, zona })
  return response.data
}
