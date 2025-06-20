import { LayoutDashboard, Sun, Calendar, CalendarMinus, ChartLine, CheckCheck, Combine, Menu, X } from "lucide-react"
import { NavLinkItem } from '@/components/ui/nav-link';
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-2 right-2 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg"
        >
          <Menu className="h-8 w-8" />
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <nav className={`
        md:hidden fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Close Button */}
        <div className="absolute top-4 left-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMobileMenu}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col h-full pt-16 pb-6 px-6">
          {/* Logo */}
          <figure className="flex justify-center mb-8">
            <img 
              src="logogane.webp" 
              alt="Logo Gane" 
              className="w-44 xl:w-52"
            />
          </figure>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col gap-3 pt-16">
            {NavLinksItems.map(link => (
              <div key={link.id} onClick={closeMobileMenu}>
                <NavLinkItem
                  IconRender={link.IconRender}
                  routeTo={link.routeTo}
                  titleName={link.titleName}
                />
              </div>
            ))}
            {user?.maquinas !== false && (
              <div onClick={closeMobileMenu}>
                <NavLinkItem
                  key={7}
                  IconRender={Combine}
                  routeTo='/reportPremio'
                  titleName='Report Premio'
                />
              </div>
            )}
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col items-center gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <ModeToggle />
            
            <Button onClick={logout} className="w-full">
              Cerrar Sesión
            </Button>

            <p className="text-xs text-center text-gray-600 dark:text-gray-400 px-2">
              La sesión se cerrará automáticamente cada 2 horas por seguridad
            </p>

            {user?.stateSalida ? <ModalSalida /> : null}
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <nav className='hidden md:block md:w-3/12'>
        <ul className='flex flex-col h-screen items-center justify-around'>
          <figure className=''>
            <img src="logogane.webp" alt="Logo Gane" width={80} height={80} className="xl:w-28 2xl:w-52" />
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
            {
              user?.maquinas !== false && (
                <NavLinkItem
                  key={7}
                  IconRender={Combine}
                  routeTo='/reportPremio'
                  titleName='Report Premio'
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

            {user?.stateSalida ? <ModalSalida /> : null}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
