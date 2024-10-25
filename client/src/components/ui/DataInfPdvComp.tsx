import { getColombiaTimeFecha } from '../../services/time.services'
import { Loading } from '../animations/Loading'
import { SimularReloj } from './SimularReloj'
import { useEffect, useState } from 'react'
import { PDVINFO } from '../../types/Pdv'

interface DataInfPdvProps {
  pdv: PDVINFO
}

export function DataInfSucursal ({ pdv: { NOMBRE, SUPERVISOR } }: DataInfPdvProps) {
  const [fecha, setFecha] = useState<string>('')
  useEffect(() => {
    getColombiaTimeFecha()
      .then(res => { setFecha(res.fecha) })
  }, [])

  return (
    <>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <div className=''>Fecha: {fecha || <Loading />}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <SimularReloj />
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-4'>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>{NOMBRE || <Loading />}</div>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>{SUPERVISOR || <Loading />}</div>
      </article>
    </>
  )
}
