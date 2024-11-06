import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import NotFound from '../pages/NotFound';
import AspDiaPage from '../pages/ApsDia';
import AspMesPage from '../pages/AspMes';
import ResumenPage from '../pages/Resumen';
import AspMenAntPage from '../pages/ApsMesAnt';

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
      // {
      //   path: '/marcacion',
      //   element: <Marcacion />,
      // },
      // {
      //   path: '/audit-marcacion',
      //   element: <AuditMarcacion />,
      // },
      // {
      //   path: '/opciones',
      //   element: <Opciones />,
      //   children: [
      //     { index: true, element: <div className='p-2 text-gray-600 flex items-center justify-center h-full pb-20'><span className='text-2xl'> ↩  Seleccione Una Opción</span></div> },
      //     { path: 'areas', element: <Areas /> },
      //     { path: 'cargos', element: <Cargos /> },
      //     { path: 'grupoturno', element: <GrupoTurno /> },
      //     { path: 'turnos', element: <Turnos /> },
      //     { path: 'grupo-turno', element: <GrupovsTurno /> }
      //   ]
      // }
    ]
  }
]);