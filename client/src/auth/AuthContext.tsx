import { createContext, ReactNode, useContext, useEffect, useState, FC } from 'react';
import { getProfile, closeSession } from '../services/LoginServices';

interface UserInt {
  DOCUMENTO: string
  NOMBRES: string
  NOMBRECARGO: string
}

interface SucursalInt {
  ZONA: string
  CODIGO: string
  NOMBRE: string
  DIRECCION: string
  SUPERVISOR: string
  CATEGORIA: string
}

export interface DataUserProfile {
  user: UserInt
  sucursal: SucursalInt
  stateSalida: boolean
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  user: DataUserProfile | null;
  setUser: React.Dispatch<React.SetStateAction<DataUserProfile | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<DataUserProfile | null>(null);

  const login = async () => {
    try {
      const user = await getProfile();
      if (user){
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      const response = await closeSession();
      if (response) {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    login();
  },[])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, setUser, user }}>
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