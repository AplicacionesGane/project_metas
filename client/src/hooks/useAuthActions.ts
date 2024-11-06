// useAuthActions.ts
import { getProfile } from '../services/LoginServices'
import { User } from '../types/User'
import { Dispatch } from 'react'

export const useAuthActions = (setUser: Dispatch<React.SetStateAction<User | null>>) => {

  const login = async (token: string): Promise<void> => {
    if (typeof token === 'string') {
      localStorage.setItem('tokenMetas', token)

      try {
        const user = await getProfile({ token })
        setUser(user)
      } catch (err) {
        console.error(err)
        localStorage.removeItem('tokenMetas')
      }
    }
  }

  const logout = (): void => {
    setUser(null)
    localStorage.removeItem('tokenMetas')
  }

  return { login, logout }
}
