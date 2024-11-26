import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useSucursalData } from '../hooks/useSucursalData';
import { PdvInfo } from '../types/interfaces';
import { type User } from '../types/User';

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
    const cookies = document.cookie; // Obtiene todas las cookies disponibles para la página actual
    if (cookies) {
      const token = cookies.split('; ').find(row => row.startsWith('tokenMetasGane='));
      if (token) {
        const value = token.split('=')[1];
        console.log('Token encontrado:', value);
      } else {
        console.log('Token no encontrado');
      }
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