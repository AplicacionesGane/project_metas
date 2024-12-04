// useAuthActions.ts
import { getProfile } from '../services/LoginServices'
import { User } from '../types/User'
import { Dispatch } from 'react'

export const useAuthActions = (setUser: Dispatch<React.SetStateAction<User | null>>) => {

  const login = async () => {
    const token = document.cookie

    console.log(token);

  }

  const logout = (): void => {
    setUser(null)
    localStorage.removeItem('tokenMetas')
  }

  return { login, logout }
}
