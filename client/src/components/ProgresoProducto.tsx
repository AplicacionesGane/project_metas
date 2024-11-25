import { formatPrice, getColorVariant } from '../utils/funtions'
import { ProgressBar } from './tremor/ProgressBar'
import { Card } from './tremor/Card'
import { Badge } from './tremor/Bagde'

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
  
  return (
    <Card className={`space-y-2`}>

      <h2 className='flex justify-between'>
        <span className='text-lg font-bold'>{pruducto}</span>
        <span>Aspiración</span>
      </h2>

      <article className='flex justify-between'>
        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <p className='pr-1 text-base'>Venta Actual: <Badge className='font-semibold' variant='default'>{ventaActual}</Badge> </p>
            : <p className='pr-1 text-base'>Venta Actual: <Badge className='font-semibold' variant='default'>{venta}</Badge> </p>
        }
        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <p className='pr-1 text-base'><Badge className='font-semibold' variant='success'>{aspiracionDia}</Badge> </p>
            : <p className='pr-1 text-base'><Badge className='font-semibold' variant='success'>{aspiracion}</Badge></p>
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

    </Card>
  )
}
