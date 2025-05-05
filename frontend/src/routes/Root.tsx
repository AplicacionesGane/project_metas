import { Loading } from '@/components/ui/Loading';
import { ThemeProvider } from '@/context/theme';
import { useAuth } from '@/hooks/useAuth';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

const LoginPage = lazy(() => import('@/app/login'));

export default function Root() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider>
        <Outlet />
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