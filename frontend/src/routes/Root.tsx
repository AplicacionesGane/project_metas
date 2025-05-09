
import { Loading } from '@/components/ui/Loading';
import { ThemeProvider } from '@/context/theme';
import { useAuth } from '@/hooks/useAuth';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

const LoginPage = lazy(() => import('@/app/login'));
const NavBar = lazy(() => import('@/components/nav-bar'));
const HeaderMain = lazy(() => import('@/components/header-main'));

export default function Root() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider>
        <section className='flex'>
          <nav className='w-3/12'>
            <NavBar />
          </nav>
          <main className='w-9/12 flex-1 h-screen overflow-y-auto'>
            <HeaderMain />
            <Outlet />
          </main>
        </section>
        <Toaster richColors position='top-right' />
      </ThemeProvider>
    </Suspense>
  )

  return (
    <Suspense fallback={<Loading />}>
      <LoginPage />
    </Suspense>
  )
}