import { Sugeridos } from '../types/Metas'
import axios from 'axios'

export const getSugeridos = async () => {
  const response = await axios.get<Sugeridos[] | null>('/sugeridos')
  return response.data
}
