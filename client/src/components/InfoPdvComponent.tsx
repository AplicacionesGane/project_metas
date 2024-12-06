import { DataInfSucursal } from './ui/DataInfPdvComp'
import { useAuth } from '../auth/AuthContext'

function InfoPdvComponent() {
  const { profileData } = useAuth()
  
  return (
    <section className='grid grid-cols-2 w-full lg:text-sm xl:text-base 2xl:text-xl justify-around py-2 px-1 gap-2 dark:text-white'>
      <DataInfSucursal nombre={profileData?.sucursal.NOMBRE || 'Desconocido'} supervisor={profileData?.sucursal.SUPERVISOR || 'N/A'} />
      {/*
        pdv?.VERSION !== '0'
          ? (
            <article className='flex justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p className=''>Categoria: {pdv?.CATEGORIA || 'N/A'} </p>
              <p className=''>Clasificación: 💎 {pdv?.VERSION || 'N/A'} 💎</p>
            </article>
          )
          : (
            <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p>Categoria:</p>
              <p>{pdv?.CATEGORIA} </p>
            </article>
          )
            */
      }

    </section>
  )
}

export default InfoPdvComponent
