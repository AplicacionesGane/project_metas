import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export default function Root() {

  return (
    <>
      <nav className='w-3/12 bg-slate-200 dark:bg-slate-900'>
        <NavBar />
      </nav>
      <main className='w-9/12  overflow-y-auto'>
        {/* <InfoPdvComponent pdv={pdvInfo } /> */}
        <Outlet />
      </main>
    </>

  )
}