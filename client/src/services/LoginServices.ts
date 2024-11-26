import { type User } from '../types/User'
import axios from 'axios'

export const getLogin = async (username: string, password: string)=> {
  try {
    const response = await axios.post('/login', { username, password })

    if (response.status !== 200) {
      throw new Error('Error en la autenticación')
    }

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getProfile = async () => {
  try {
    const response = await axios.get('/profile')
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
