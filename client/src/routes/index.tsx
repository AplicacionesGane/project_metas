import { createBrowserRouter } from 'react-router-dom';
import { Loading } from '../components/Loading'

import Root from './Root';
import NotFound from '../pages/NotFound';
import { lazy, Suspense } from 'react';

const AspDiaPage = lazy(() => import('../pages/ApsDia'));
const AspMesPage = lazy(() => import('../pages/AspMes'));
const ResumenPage = lazy(() => import('../pages/Resumen'));
const AspMenAntPage = lazy(() => import('../pages/ApsMesAnt'));
const SugeridosPage = lazy(() => import('../pages/Sugeridos'));
const HistCatPage = lazy(() => import('../pages/HistCate'));

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