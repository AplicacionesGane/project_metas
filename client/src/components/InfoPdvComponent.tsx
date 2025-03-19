import { getColombiaTimeFecha } from '../services/time.services'
import { SimularReloj } from './ui/SimularReloj'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'

function InfoSucursalComponent() {
  const { profileData } = useAuth()
  const [fecha, setFecha] = useState<string>('')

  useEffect(() => {
    getColombiaTimeFecha()
      .then(res => { setFecha(res.fecha) })
  }, [])

  return (
    <section className='grid grid-cols-2 w-full lg:text-sm xl:text-base 2xl:text-xl justify-around py-2 px-1 gap-2 dark:text-white'>
      <article className='flex items-center justify-center text-center border py-1 shadow rounded-md bg-slate-100 dark:bg-slate-900 font-semibold'>
        <div className=''>Fecha: {fecha}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 shadow rounded-md bg-slate-100 dark:bg-slate-900 font-semibold'>
        <SimularReloj />
      </article>
      <article className='flex items-center justify-center text-center border py-1 shadow rounded-md bg-slate-100 dark:bg-slate-900 font-semibold gap-4'>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>{profileData?.sucursal.NOMBRE}</div>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>{profileData?.sucursal.SUPERVISOR}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 shadow rounded-md bg-slate-100 dark:bg-slate-900 font-semibold'>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>{profileData?.infCategoria === null ? 'Sin Categoría' : profileData?.infCategoria.CATEGORIZACION}</div>
      </article>
    </section>
  )
}

export default InfoSucursalComponent