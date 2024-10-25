import { DataInfSucursal } from './ui/DataInfPdvComp'
import { PDVINFO } from '../types/Pdv'

interface PropsInfoPdv {
  pdv: PDVINFO
}

export function InfoPdvComponent ({ pdv }: PropsInfoPdv) {
  return (
    <section className='grid grid-cols-2 w-full lg:text-sm xl:text-base 2xl:text-xl justify-around py-2 px-1 gap-2 dark:text-white'>
      {pdv && <DataInfSucursal pdv={pdv} />}
      {
        pdv?.VERSION !== '0'
          ? (
            <article className='flex justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p className=''>Categoria: {pdv.CATEGORIA || ''} </p>
              <p className=''>Clasificación: 💎 {pdv.VERSION || ''} 💎</p>
            </article>
            )
          : (
            <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p>Categoria:</p>
              <p>{pdv.CATEGORIA} </p>
            </article>
            )
      }

    </section>
  )
}
