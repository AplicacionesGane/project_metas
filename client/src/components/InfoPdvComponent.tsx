import { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import { DataInfSucursal } from './ui/DataInfPdvComp'
import axios from 'axios'

interface PdvProps {
  CATEGORIA: string
  VERSION: string
  DIRECCION: string
  NOMBRE: string
  SUPERVISOR: string
  ZONA: string
}

export function InfoPdvComponent() {
  const [pdv, setPdv] = useState<PdvProps | null>(null)
  const { user } = useAuth()

  useEffect(() => {
    if (user?.codigo !== 0) {
      axios.post('/infopdv', { codigo: user?.codigo })
        .then((res) => {
          setPdv(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [user?.codigo])

  return (
    <section className='grid grid-cols-2 w-full lg:text-sm xl:text-base 2xl:text-xl justify-around py-2 px-1 gap-2 dark:text-white'>
      <DataInfSucursal nombre={pdv?.NOMBRE || 'Desconocido'} supervisor={pdv?.SUPERVISOR || 'N/a'} />
      {
        pdv?.VERSION !== '0'
          ? (
            <article className='flex justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p className=''>Categoria: {pdv?.CATEGORIA || ''} </p>
              <p className=''>Clasificación: 💎 {pdv?.VERSION || ''} 💎</p>
            </article>
          )
          : (
            <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p>Categoria:</p>
              <p>{pdv?.CATEGORIA} </p>
            </article>
          )
      }

    </section>
  )
}
