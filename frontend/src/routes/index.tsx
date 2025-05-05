import { createBrowserRouter } from 'react-router';
import { Loading } from '@/components/ui/Loading';


import Root from './Root';
import { Suspense } from 'react';
import NotFound from '@/app/not-found';

// const SugeridosPage = lazy(() => import('../pages/Sugeridos'));
// const AspMenAntPage = lazy(() => import('../pages/ApsMesAnt'));
// const HistCatPage = lazy(() => import('../pages/HistCate'));
// const ResumenPage = lazy(() => import('../pages/Resumen'));
// const AspMesPage = lazy(() => import('../pages/AspMes'));
// const AspDiaPage = lazy(() => import('../pages/ApsDia'));
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
            <div>Test Resumen</div>
          </Suspense>
        )
      },
      /*
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
      {
        path: '/metaxhora/:producto',
        element: <MetaXhora />,
      }
      */
    ]
  }
]);