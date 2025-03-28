import { ProgressBar } from '../components/tremor/ProgressBar'
import { Sugeridos } from '../types/Metas'
import { Card } from './tremor/Card'

export function ProgressSugerido({ data }: { data: Sugeridos[] }) {

  return (
    <Card className={`mx-auto mt-2 w-full flex flex-col gap-4 `}>
      <article className='flex gap-4 items-center justify-center'>
        <h2 className='font-semibold text-lg'>PRODUCTO SUGERIDO {'Aun No Se Ha Definido'}</h2>
        <span>-</span>
        <h2 className='font-semibold text-lg'>N° Sugeridos Del Día </h2>
      </article>

      <article className='flex'>
        <p> Formularios Impresos: {}</p>
        <span className='pl-4 font-semibold' />
      </article>

      <article className='flex flex-col items-center'>
        <p> <span>Progeso Actual: </span> &bull; {0} %</p>
        <ProgressBar value={30} variant={'default'} className='mt-3' />
      </article>

      <article>
        {
          100 >= 100
            ? (
              <p className='pt-2 text-center'>Buen Trabajo 😁 - Meta Completada ✅  </p>
            )
            : null
        }
      </article>
    </Card>
  )
}
