import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getProfile, logout } from '../services/LoginServices';
import { InfoGeneralI } from '../types/interfaces';

// Definimos la interfaz para el contexto de autenticación
export interface AuthContextType {
  dataGeneral: InfoGeneralI | null;
  setDataGeneral: React.Dispatch<React.SetStateAction<InfoGeneralI | null>>
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

// Creamos el contexto de autenticación con un valor inicial nulo
const AuthContext = createContext<AuthContextType | null>(null);

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [dataGeneral, setDataGeneral] = useState<InfoGeneralI | null>(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getProfile()
      .then(res => setDataGeneral(res.data))
      .catch((error) => { error.response.status === 401 && logout() });
  }, [auth]);


  return (
    <AuthContext.Provider value={{ dataGeneral, auth, setAuth, setDataGeneral }}>
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