import { getColombiaTimeFecha } from '../../services/time.services'
import { SimularReloj } from './SimularReloj'
import { useEffect, useState } from 'react'


export function DataInfSucursal({ nombre, supervisor }: { nombre: string, supervisor: string }) {
  const [fecha, setFecha] = useState<string>('')
  useEffect(() => {
    getColombiaTimeFecha()
      .then(res => { setFecha(res.fecha) })
  }, [])

  return (
    <>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <div className=''>Fecha: {fecha}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <SimularReloj />
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-4'>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>{nombre}</div>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>{supervisor}</div>
      </article>
    </>
  )
}
