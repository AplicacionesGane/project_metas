import { Navigate, Outlet } from 'react-router-dom'
import { InfoPdvComponent } from './InfoPdvComponent'
import { NavBar } from './NavBar'
import { type FC } from 'react'
import { PDVINFO } from '../types/Pdv'

interface ProtectedRouteProps {
  redirectTo?: string
  isAllowed: boolean
  pdvInfo: PDVINFO
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, redirectTo = '/login', pdvInfo }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (
    pdvInfo.ZONA
      ? (
        <>
          <nav className='w-3/12 bg-slate-200 dark:bg-slate-900'>
            <NavBar />
          </nav>
          <main className='w-9/12  overflow-y-auto'>
            <InfoPdvComponent pdv={pdvInfo} />
            <Outlet />
          </main>
        </>
        )
      : null
  )
}
