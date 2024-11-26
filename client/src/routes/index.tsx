import { createBrowserRouter } from 'react-router-dom';
import { Loading } from '../components/Loading'
import NotFound from '../pages/NotFound';

import { lazy, Suspense } from 'react';
import Root from './Root';

const SugeridosPage = lazy(() => import('../pages/Sugeridos'));
const AspMenAntPage = lazy(() => import('../pages/ApsMesAnt'));
const HistCatPage = lazy(() => import('../pages/HistCate'));
const ResumenPage = lazy(() => import('../pages/Resumen'));
const AspMesPage = lazy(() => import('../pages/AspMes'));
const AspDiaPage = lazy(() => import('../pages/ApsDia'));

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
          </Suspense>)
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
        path: '/sugeridos',
        element: (
          <Suspense fallback={<Loading />}>
            <SugeridosPage />
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
    ]
  }
]);