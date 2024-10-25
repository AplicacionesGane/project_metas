import axios from 'axios'
import { Sugeridos } from '../types/Metas'

export const getSugeridos1 = async ({ codigo, username, zone }:{codigo: number, username: string, zone: string }) => {
  const response = await axios.post('/SugeridosPrimeraConsulta', { codigo, user: username, zone })
  return response.data as Sugeridos
}

export const getSugeridos2 = async ({ codigo, username, zone }:{codigo: number, username: string, zone: string }) => {
  const response = await axios.post('/SugeridosSegundaConsulta', { codigo, user: username, zone })
  return response.data
}
