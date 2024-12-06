import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getProfile, logout } from '../services/LoginServices';
import { AuthI, ProfileI } from '../types/interfaces';

// Definimos la interfaz para el contexto de autenticación
export interface AuthContextType {
  user: AuthI | null;
  setUser: React.Dispatch<React.SetStateAction<AuthI | null>>;
  dataGeneral: ProfileI | null;
  setDataGeneral: React.Dispatch<React.SetStateAction<ProfileI | null>>
  funLogOut: () => void;
}

// Creamos el contexto de autenticación con un valor inicial nulo
const AuthContext = createContext<AuthContextType | null>(null);

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [dataGeneral, setDataGeneral] = useState<ProfileI | null>(null);
  const [user, setUser] = useState<AuthI | null>(null);

  const funLogOut = () => {
    setDataGeneral(null);
    setUser(null);
    logout();
  }

  useEffect(() => {
    getProfile()
      .then(data => {
        setDataGeneral(data)
        let codigo, zona, username;
        if (data) {
          codigo = data.sucursal.CODIGO;
          zona = data.sucursal.ZONA;
          username = data.user.NOMBRES;
          setUser({ sucursal: parseInt(codigo), zona: parseInt(zona), username });
        }
      })
      .catch((error) => { error.response.status === 401 && logout() });
  }, [user?.sucursal]);

  return (
    <AuthContext.Provider value={{ user, setUser, dataGeneral, setDataGeneral, funLogOut }}>
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