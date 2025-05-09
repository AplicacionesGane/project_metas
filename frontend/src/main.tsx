import { AuthContextProvider } from '@/context/auth';
import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterMain } from '@/routes';
import { StrictMode } from 'react';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_URL_API || 'http://api-metas:80/api/v1'
axios.defaults.withCredentials = true

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={RouterMain} />
    </AuthContextProvider>
  </StrictMode>
)
