import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { useAuth } from '../auth/AuthContext';
import LoginPage from '../pages/LoginForm';

import { InfoPdvComponent } from '../components/InfoPdvComponent';

export default function Root() {
  const { user } = useAuth()

  if (!user) return <LoginPage />

  return (
    <>
      <nav className='w-3/12 bg-slate-200 dark:bg-slate-900'>
        <NavBar />
      </nav>
      <main className='w-9/12  overflow-y-auto'>
        <InfoPdvComponent />
        <Outlet />
      </main>
    </>

  )
}