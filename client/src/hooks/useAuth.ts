import { AuthContext, AuthContextType } from '../auth/AuthContext';
import { useContext } from 'react';

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };