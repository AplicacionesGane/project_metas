import { type User } from '../types/User'
import axios from 'axios'

interface LoginResponse {
  auth: boolean
  token: string
}

export const getLogin = async ({ username, password }: { username: string, password: string }): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>('/login', { username, password })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getProfile = async (token: string) => {
  try {
    const response = await axios.get<User>('/profile', { headers: { Authorization: `Bearer ${token}` } })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
