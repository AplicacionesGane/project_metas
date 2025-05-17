import { createBrowserRouter } from 'react-router';
import { Loading } from '@/components/ui/Loading';

import { Suspense, lazy } from 'react';
import NotFound from '@/app/not-found';
import Root from './Root';

const HistCatPage = lazy(() => import('@/app/his-categorias'));
const ReportPremio = lazy(() => import('@/app/report-premio'));
const AspMenAntPage = lazy(() => import('@/app/aps-mes-ant'));
const SugeridosPage = lazy(() => import('@/app/sugeridos'));
const AspMesPage = lazy(() => import('@/app/asp-mes-act'));
const MetaXhora = lazy(() => import('@/app/meta-hora'));
const ResumenPage = lazy(() => import('@/app/resumen'));
const AspDiaPage = lazy(() => import('@/app/asp-dia'));


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
      {
        path: '/metaxhora',
        element: (
          <Suspense fallback={<Loading />}>
            <MetaXhora />
          </Suspense>
        ),
      },
      {
        path: '/reportPremio',
        element: (
          <Suspense fallback={<Loading />}>
            <ReportPremio />
          </Suspense>
        )
      }
    ]
  }
]);