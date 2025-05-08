import { type AuthContextType, type DataUserProfile } from "@/types/DataInterface";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { getProfile, closeSession } from "@/services/authServices";

export const AuthContextAuth = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<DataUserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    <AuthContextAuth.Provider value={{ isAuthenticated, login, logout, setUser, user }}>
      {children}
    </AuthContextAuth.Provider>
  );
};
