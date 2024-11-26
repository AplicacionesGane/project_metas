import { RiDashboardLine, RiSunLine, RiCalendar2Line, RiCalendarTodoLine, RiLineChartLine, RiTaskLine } from '@remixicon/react'
import { Switch } from '../components/tremor/Switch'
import { useTheme } from '../context/ThemeContext'
import { NavLinkItem } from './ui/NavLinkItem'
import { useAuth } from '../auth/AuthContext'

const navLinks = [
  {
    id: 1,
    path: '/',
    icon: RiDashboardLine,
    label: 'Resumen De Aspiración'
  },
  {
    id: 2,
    path: '/aspiracionDia',
    icon: RiSunLine,
    label: 'Aspiración Del Día'
  },
  {
    id: 3,
    path: '/aspiracionMesActual',
    icon: RiCalendar2Line,
    label: 'Aspiración Mes Actual'
  },
  {
    id: 4,
    path: '/aspiracionMesAnterior',
    icon: RiCalendarTodoLine,
    label: 'Aspiración Mes Anterior'
  },
  {
    id: 5,
    path: '/historial',
    icon: RiLineChartLine,
    label: 'Historial Categorías'
  },
  {
    id: 6,
    path: '/sugeridos',
    icon: RiTaskLine,
    label: 'Sugeridos'
  }
]

function NavBar() {
  const { darkMode, toggleTheme } = useTheme()
  const { logout } = useAuth()

  return (
    <ul className='flex flex-col h-screen items-center justify-around'>
      <figure>
        <img src='/logogane.webp' alt='logo gane' className='w-36 2xl:w-44' />
      </figure>

      <li className='flex flex-col gap-4 2xl:gap-6 3xl:gap-8 font-semibold dark:text-white'>
        {navLinks.map(link => <NavLinkItem key={link.id} path={link.path} icon={link.icon} label={link.label} />)}
      </li>

      <li className='flex flex-col items-center gap-4'>
        <section className={`flex items-center gap-2 px-4 py-2 ${darkMode ? 'bg-slate-200' : 'bg-slate-600 '} rounded-md`}>
          {darkMode ? <p className='text-white font-semibold dark:text-black'>Cambiar Modo Claro</p> : <p className='text-white font-semibold dark:text-black'>Cambiar Modo Oscuro</p>}
          <Switch checked={darkMode} onCheckedChange={toggleTheme} />
        </section>

        <button className='p-2  rounded-md font-semibold bg-blue-700 text-white hover:bg-green-600 transition-all' onClick={logout}>
          Cerrar Sesión
        </button>

        <p className='text-sm text-center dark:text-white'>La sesión se cerrará automáticamente cada 2 horas por seguridad</p>
      </li>
    </ul>
  )
}

export default NavBar