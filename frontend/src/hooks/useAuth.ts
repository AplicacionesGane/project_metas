import { AuthContextAuth } from '@/context/auth';
import { useContext } from 'react';

export const useAuth = () => {
	const context = useContext(AuthContextAuth);
	if (!context) {
		throw new Error('useAuth must be used within an AuthContextProvider');
	}

	return context;
};