import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useSucursalData } from '../hooks/useSucursalData';
import { PdvInfo } from '../types/interfaces';
import { type User } from '../types/User';
import { getProfile } from '../services/LoginServices';

// Definimos la interfaz para el contexto de autenticación
export interface AuthContextType {
  login: () => void;
  logout: () => void;
  pdv: PdvInfo | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  user: User | null;
}

// Creamos el contexto de autenticación con un valor inicial nulo
const AuthContext = createContext<AuthContextType | null>(null);

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { pdv } = useSucursalData(user?.codigo!);

  const login = async () => {
    try {
      const response = await getProfile();
      console.log(response);
    } catch (error) {
      console.error(error)
    }
  }

  const logout = (): void => {
    setUser(null)
    localStorage.removeItem('tokenMetas')
  }


  return (
    <AuthContext.Provider value={{ login, logout, pdv, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};