
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
        <section className='md:flex'>
          <nav className='hidden md:block md:w-3/12'>
            <NavBar />
          </nav>
          <section className='md:w-9/12'>
            <header className='grid gap-1 px-1 pt-1 md:gap-2 md:grid-cols-2'>
              <HeaderMain />
            </header>
            <main className='px-1'>
              <Outlet />
            </main>
          </section>
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