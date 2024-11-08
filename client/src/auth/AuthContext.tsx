import React, { createContext, ReactNode, useContext, useState, useMemo, useEffect } from 'react';
import { useAuthActions } from '../hooks/useAuthActions';
import { type User } from '../types/User';
import { useSucursalData } from '../hooks/useSucursalData';
import { PdvInfo } from '../types/interfaces';
import { getProfile } from '../services/LoginServices';

// Definimos la interfaz para el contexto de autenticación
export interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (token: string) => Promise<void>;
  logout: () => void;
  pdv: PdvInfo | null;
}

// Creamos el contexto de autenticación con un valor inicial nulo
const AuthContext = createContext<AuthContextType | null>(null);

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { login, logout } = useAuthActions(setUser);
  const { pdv } = useSucursalData(user?.codigo!);

  // Revisamos si existe token
  const token = localStorage.getItem('tokenMetas');
  useEffect(() => {
    if (token) {
      getProfile({ token })
        .then(user => setUser(user))
        .catch(() => {
          localStorage.removeItem('tokenMetas');
          setUser(null);
        });
    }
  }, [token]);

  // Usamos useMemo para evitar recrear el valor del contexto en cada renderizado
  const value = useMemo(() => ({ user, setUser, login, logout, pdv }), [user, login, logout]);

  return (
    <AuthContext.Provider value={value}>
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