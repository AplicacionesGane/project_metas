import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getProfile, logout } from '../services/LoginServices';
import { ProfileDataI } from '../types/interfaces';

// Definimos la interfaz para el contexto de autenticación
export interface AuthContextType {
  profileData: ProfileDataI | null;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataI | null>>;
  funLogOut: () => void;
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

// Creamos el contexto de autenticación con un valor inicial nulo
const AuthContext = createContext<AuthContextType | null>(null);

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [profileData, setProfileData] = useState<ProfileDataI | null>(null);
  const [auth, setAuth] = useState(false);

  const funLogOut = () => {
    setProfileData(null);
    logout();
  }

  useEffect(() => {
    getProfile()
      .then(data => {
        if (data) {
          setProfileData(data);
        }
      })
      .catch((error) => { error.response.status === 401 && logout() });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ profileData, setProfileData, funLogOut, auth, setAuth }}>
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