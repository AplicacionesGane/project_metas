import { useAuth } from '../auth/AuthContext';
import { Loading } from '../components/Loading';
import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from '../context/ThemeContext';

const LoginPage = lazy(() => import('../pages/LoginForm'))
const ComPdvInfo = lazy(() => import('../components/InfoPdvComponent'))
const NavBar = lazy(() => import('../components/NavBar'))

export default function Root() {
  const { user } = useAuth()

  if (!user) return (
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