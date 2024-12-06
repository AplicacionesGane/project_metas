import { ThemeProvider } from '../context/ThemeContext';
import { Loading } from '../components/Loading';
import { useAuth } from '../auth/AuthContext';
import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ComPdvInfo = lazy(() => import('../components/InfoPdvComponent'))
const LoginPage = lazy(() => import('../pages/LoginForm'))
const NavBar = lazy(() => import('../components/NavBar'))

export default function Root() {
  const { profileData } = useAuth()

  if (!profileData?.sucursal || !profileData?.user) return (
    <Suspense fallback={<Loading />}>
      <LoginPage />
    </Suspense>
  )

  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <nav className='w-3/12 bg-slate-200 dark:bg-slate-900'>
          <NavBar />
        </nav>
        <main className='w-9/12  overflow-y-auto'>
          <ComPdvInfo />
          <Outlet />
        </main>
      </Suspense>
    </ThemeProvider>
  )

}