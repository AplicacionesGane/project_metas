import { createBrowserRouter } from 'react-router';
import { Loading } from '@/components/ui/Loading';

import { Suspense, lazy } from 'react';
import NotFound from '@/app/not-found';
import Root from './Root';

const ResumenPage = lazy(() => import('@/app/resumen'));
const AspDiaPage = lazy(() => import('@/app/asp-dia'));
const AspMesPage = lazy(() => import('@/app/asp-mes-act'));
const AspMenAntPage = lazy(() => import('@/app/aps-mes-ant'));
const HistCatPage = lazy(() => import('@/app/his-categorias'));
const SugeridosPage = lazy(() => import('@/app/sugeridos'));

// const MetaXhora = lazy(() => import('../pages/metaxhora'));

export const RouterMain = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <ResumenPage />
          </Suspense>
        )
      },
      {
        path: '/aspiracionDia',
        element: (
          <Suspense fallback={<Loading />}>
            <AspDiaPage />
          </Suspense>
        )
      },
      {
        path: '/aspiracionMesActual',
        element: (
          <Suspense fallback={<Loading />}>
            <AspMesPage />
          </Suspense>
        )
      },
      {
        path: '/aspiracionMesAnterior',
        element: (
          <Suspense fallback={<Loading />}>
            <AspMenAntPage />
          </Suspense>
        )
      },
      {
        path: '/historial',
        element: (
          <Suspense fallback={<Loading />}>
            <HistCatPage />
          </Suspense>
        )
      },
      {
        path: '/sugeridos',
        element: (
          <Suspense fallback={<Loading />}>
            <SugeridosPage />
          </Suspense>
        )
      },
      /*
    {
      path: '/metaxhora/:producto',
      element: <MetaXhora />,
    }
    */
    ]
  }
]);