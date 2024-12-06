import { ProfileDataI } from '../types/interfaces'
import axios from 'axios'

export const getLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post('/login', { username, password })

    if (response.status !== 200) {
      throw new Error('Error en la autenticación')
    }

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getProfile = async () => {
  try {
    const response = await axios.get<ProfileDataI | null>('/profile')

    if (response.status !== 200) {
      throw new Error('Error al obtener el perfil')
    }

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const logout = async () => {
  try {
    const response = await axios.get('/logout')

    if (response.status !== 200) {
      throw new Error('Error al cerrar sesión')
    }

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}