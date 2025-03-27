import { RiDashboardLine, RiSunLine, RiCalendar2Line, RiCalendarTodoLine, RiLineChartLine, RiTaskLine } from '@remixicon/react'
import { Switch } from '../components/tremor/Switch'
import { useTheme } from '../context/ThemeContext'
import { NavLinkItem } from './ui/NavLinkItem'
import { useAuth } from '../auth/AuthContext'
import LogoEmpresa from './LogoEmpresa'
import { useState } from 'react'
import Modal from './ui/Modal'

const NavLinksItems = [
  {
    id: 1,
    routeTo: '/',
    IconRender: RiDashboardLine,
    titleName: 'Resumen De Aspiración'
  },
  {
    id: 2,
    routeTo: '/aspiracionDia',
    IconRender: RiSunLine,
    titleName: 'Aspiración Del Día'
  },
  {
    id: 3,
    routeTo: '/aspiracionMesActual',
    IconRender: RiCalendar2Line,
    titleName: 'Aspiración Mes Actual'
  },
  {
    id: 4,
    routeTo: '/aspiracionMesAnterior',
    IconRender: RiCalendarTodoLine,
    titleName: 'Aspiración Mes Anterior'
  },
  {
    id: 5,
    routeTo: '/historial',
    IconRender: RiLineChartLine,
    titleName: 'Historial Categorías'
  },
  {
    id: 6,
    routeTo: '/sugeridos',
    IconRender: RiTaskLine,
    titleName: 'Sugeridos'
  }
]

function NavBar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme()
  const { funLogOut } = useAuth()

  return (
    <ul className='flex flex-col h-screen items-center justify-around'>
      <LogoEmpresa />

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
        <section className={`flex items-center gap-2 px-4 py-2 ${darkMode ? 'bg-slate-200' : 'bg-slate-600 '} rounded-md`}>
          {darkMode ? <p className='text-white font-semibold dark:text-black'>Cambiar Modo Claro</p> : <p className='text-white font-semibold dark:text-black'>Cambiar Modo Oscuro</p>}
          <Switch checked={darkMode} onCheckedChange={toggleTheme} />
        </section>

        <button className='p-2  rounded-md font-semibold bg-blue-700 text-white hover:bg-green-600 transition-all'
          onClick={() => funLogOut()}>
          Cerrar Sesión
        </button>

        <p className='text-sm text-center dark:text-white px-4 text-gray-700'>La sesión se cerrará automáticamente cada 2 horas por seguridad</p>

        <button className={`${isModalOpen ? 'text-red-600' : 'hover:text-blue-700'}`} onClick={() => setModalOpen(true)} >
          Registrar Salida
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Registrar Salida Turno</h2>

          <article className='pt-4'>
            <p className="text-gray-600">
              Estás seguro que deseas realizar salida de tu turno ?
            </p>
            <p className='text-gray-600'>
              Esto enviará un reporte como hora de salida y solo se podrá realizar una vez.
            </p>
          </article>

          <article className='flex gap-2'>
            <button
              className="mt-4 px-4 py-2 text-white bg-red-700 rounded hover:bg-red-600"
              onClick={() => setModalOpen(false)}
            >
              Cancelar
            </button>
            <button
              className="mt-4 px-4 py-2 text-white bg-green-700 rounded hover:bg-green-600"
              onClick={() => setModalOpen(false)}
            >
              Enviar Salida
            </button>
          </article>
        </Modal>
      </li>
    </ul>
  )
}

export default NavBar