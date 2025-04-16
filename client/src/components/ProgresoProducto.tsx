import { formatPrice, getColorVariant, colorBackground } from '../utils/funtions'
import { ProgressBar } from './tremor/ProgressBar'
import { Card } from './tremor/Card'
import { Badge } from './tremor/Bagde'
import { Link } from 'react-router-dom'

interface BarraProgressProductProps {
  pruducto: string
  ventaActual: number
  aspiracionDia: number
  percentage: number
  percentage2: number
}

export function BarraProgressProduct({ pruducto, ventaActual, aspiracionDia, percentage, percentage2 }: BarraProgressProductProps) {
  const venta = formatPrice(ventaActual)
  const aspiracion = formatPrice(aspiracionDia)
  const colorVariant = getColorVariant(percentage)
  const background = colorBackground(percentage)

  return (
    <Card className={`${background} space-y-2 relative`}>
      <h2 className='flex justify-between'>
        <span className='text-lg font-bold underline'>
          {pruducto.slice(0, 1)}
          {pruducto.toLocaleLowerCase().slice(1).replace('_', ' ')}
        </span>
        <span>Aspiración</span>
      </h2>

      <article className='flex justify-between'>
        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <p className='pr-1 text-base'>Venta Actual: <Badge className='font-semibold shadow' variant='default'>{ventaActual}</Badge> </p>
            : <p className='pr-1 text-base'>Venta Actual: <Badge className='font-semibold shadow' variant='default'>{venta}</Badge> </p>
        }
        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <p className='pr-1 text-base'><Badge className='font-semibold shadow' variant='success'>{aspiracionDia}</Badge> </p>
            : <p className='pr-1 text-base'><Badge className='font-semibold shadow' variant='success'>{aspiracion}</Badge></p>
        }
      </article>

      <section className='flex justify-center items-center gap-4'>
        <ProgressBar value={percentage} variant={colorVariant} showAnimation />
        <span>{percentage}%</span>
      </section>

      <section className='flex justify-between'>
        <h4>Porcentaje De Ejecución:</h4>
        <span>{percentage2 > 100 ? percentage2 : percentage} %</span>
      </section>

      {
        pruducto === 'Venta Total Chance' && (
          <section className="absolute right-0 bottom-0 w-10 h-14 overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-blue-500 transform rotate-45 origin-bottom-left rounded-md"></div>
              <Link
                to={`/metaxhora/${pruducto}`}
                className="absolute inset-0 flex items-center justify-center text-white font-bold"
              >
              </Link>
            </div>
          </section>
        )
      }

    </Card>
  )
}
