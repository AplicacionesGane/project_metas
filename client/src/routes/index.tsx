import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import NotFound from '../pages/NotFound';
import AspDiaPage from '../pages/ApsDia';
import AspMesPage from '../pages/AspMes';
import ResumenPage from '../pages/Resumen';
import AspMenAntPage from '../pages/ApsMesAnt';
import SugeridosPage from '../pages/Sugeridos';
import HistCatPage from '../pages/HistCate';

export const RouterMain = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <ResumenPage />,
      },
      {
        path: '/aspiracionDia',
        element: <AspDiaPage />,
      },
      {
        path: '/aspiracionMesActual',
        element: <AspMesPage />,
      },
      {
        path: '/aspiracionMesAnterior',
        element: <AspMenAntPage />,
      },
      {
        path: '/sugeridos',
        element: <SugeridosPage />,
      },
      {
        path: '/historial',
        element: <HistCatPage />,
      },
    ]
  }
]);