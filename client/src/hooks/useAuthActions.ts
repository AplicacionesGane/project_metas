// useAuthActions.ts
import { getProfile } from '../services/LoginServices'
import { User } from '../types/User'
import React from 'react'

export const useAuthActions = (setUser: React.Dispatch<React.SetStateAction<User | null>>) => {
  // const navigate = useNavigate()

  const login = async (token: string): Promise<void> => {
    if (typeof token === 'string') {
      localStorage.setItem('tokenMetas', token)

      try {
        const user = await getProfile({ token })
        setUser(user)
        // navigate('/')
      } catch (err) {
        console.error(err)
        localStorage.removeItem('tokenMetas')
        // navigate('/login')
      }
    }
  }

  const logout = (): void => {
    setUser(null)
    localStorage.removeItem('tokenMetas')
    // navigate('/login')
  }

  return { login, logout }
}
