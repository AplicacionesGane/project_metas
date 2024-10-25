import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon, CategoriaIcon } from './icons'
import { useTheme } from '../context/ThemeContext'
import { NavLinkItem } from './ui/NavLinkItem'
import { useAuth } from '../auth/AuthContext'
import { Switch } from '@tremor/react'

const navLinks = [
  { id: 1, path: '/', icon: Dashboard, label: 'Resumen De Aspiración' },
  { id: 2, path: '/aspiracionDia', icon: SunIcon, label: 'Aspiración Del Día' },
  { id: 3, path: '/aspiracionMesActual', icon: CalendarIcon, label: 'Aspiración Mes Actual' },
  { id: 4, path: '/aspiracionMesAnterior', icon: CalendarAntIcon, label: 'Aspiración Mes Anterior' },
  { id: 5, path: '/historial', icon: CategoriaIcon, label: 'Historial Categorías' },
  { id: 6, path: '/sugeridos', icon: DocsIcon, label: 'Sugeridos' }
]

export function NavBar () {
  const { darkMode, toggleTheme } = useTheme()
  const { logout } = useAuth()

  return (
    <ul className='flex flex-col h-screen items-center justify-around'>
      <figure>
        <img src='/gane.webp' alt='logo gane' className='w-36 2xl:w-44' />
      </figure>

      <li className='flex flex-col gap-4 2xl:gap-6 3xl:gap-8 font-semibold dark:text-white'>
        {navLinks.map(link => <NavLinkItem key={link.id} path={link.path} icon={link.icon} label={link.label} />)}
      </li>

      <li className='flex flex-col items-center gap-4'>
        <section className={`flex items-center gap-2 px-4 py-2 ${darkMode ? 'bg-slate-200' : 'bg-slate-600 '} rounded-md`}>
          {darkMode ? <p className='text-white font-semibold dark:text-black'>Cambiar Modo Claro</p> : <p className='text-white font-semibold dark:text-black'>Cambiar Modo Oscuro</p>}
          <Switch id='switch' name='switch' checked={darkMode} onChange={toggleTheme} className='pt-2' />
        </section>

        <button className='p-2  rounded-md font-semibold bg-blue-700 text-white hover:bg-green-600 transition-all' onClick={logout}>
          Cerrar Sesión
        </button>

        <p className='text-sm text-center dark:text-white'>La sesión se cerrará automáticamente cada 2 horas por seguridad</p>
      </li>
    </ul>
  )
}
