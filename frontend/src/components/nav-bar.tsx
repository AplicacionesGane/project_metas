import { LayoutDashboard, Sun, Calendar, CalendarMinus, ChartLine, CheckCheck } from "lucide-react"
import { NavLinkItem } from '@/components/ui/nav-link';
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';

import ModalSalida from '@/components/ui/modal-salida';

const NavLinksItems = [
  {
    id: 1,
    routeTo: '/',
    IconRender: LayoutDashboard,
    titleName: 'Resumen De Aspiración'
  },
  {
    id: 2,
    routeTo: '/aspiracionDia',
    IconRender: Sun,
    titleName: 'Aspiración Del Día'
  },
  {
    id: 3,
    routeTo: '/aspiracionMesActual',
    IconRender: Calendar,
    titleName: 'Aspiración Mes Actual'
  },
  {
    id: 4,
    routeTo: '/aspiracionMesAnterior',
    IconRender: CalendarMinus,
    titleName: 'Aspiración Mes Anterior'
  },
  {
    id: 5,
    routeTo: '/historial',
    IconRender: ChartLine,
    titleName: 'Historial Categorías'
  },
  {
    id: 6,
    routeTo: '/sugeridos',
    IconRender: CheckCheck,
    titleName: 'Sugeridos'
  }
]

function NavBar() {
  const { user, logout } = useAuth();

  return (
    <ul className='flex flex-col h-screen items-center justify-around bg-slate-50'>
      <figure className=''>
        <img src="logogane.webp" alt="Logo Gane" width={180} height={180} />
      </figure>

      <li className='flex flex-col gap-4 2xl:gap-6 3xl:gap-8 font-semibold dark:text-white'>
        {
          NavLinksItems.map(link =>
            <NavLinkItem
              key={link.id}
              IconRender={link.IconRender}
              routeTo={link.routeTo}
              titleName={link.titleName}
            />
          )
        }
      </li>

      <li className='flex flex-col items-center gap-4'>
        <ModeToggle />

        <Button onClick={logout}>
          Cerrar Sesión
        </Button>


        <p className='text-sm text-center dark:text-white px-4 text-gray-700'>La sesión se cerrará automáticamente cada 2 horas por seguridad</p>

        {
          user?.stateSalida ? <ModalSalida /> : null
        }
      </li>
    </ul>
  )
}

export default NavBar
