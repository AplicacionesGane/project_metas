import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { formatPrice, colorBackground } from '@/lib/funtions';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router';

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

  return (
    <Card className={`${colorBackground(percentage, 'light')} relative`}>
      <CardTitle className='flex justify-between'>
        <h1 className='font-bold text-lg underline dark:text-white'>{pruducto.slice(0, 1)}{pruducto.toLocaleLowerCase().slice(1).replace('_', ' ')}</h1>
        <h1 className='dark:text-white'>Aspiración</h1>
      </CardTitle>

      <CardDescription className='flex justify-between text-black dark:text-white'>
        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <p className='pr-1 text-base'>Venta Actual: <Badge variant='success'>{ventaActual}</Badge> </p>
            : <p className='pr-1 text-base'>Venta Actual: <Badge variant='success'>{venta}</Badge> </p>
        }
        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <p className='pr-1 text-base'><Badge variant='default'>{aspiracionDia}</Badge> </p>
            : <p className='pr-1 text-base'><Badge variant='default'>{aspiracion}</Badge></p>
        }
      </CardDescription>

      <CardContent className='p-0 flex items-center justify-between gap-2'>
        <Progress value={percentage} />
        <p>{percentage}%</p>
      </CardContent>

      <CardDescription className='flex justify-between text-black dark:text-white'>
        <h4>Porcentaje De Ejecución:</h4>
        <span>{percentage2 > 100 ? percentage2 : percentage} %</span>
      </CardDescription>

      {
        pruducto === 'Venta Total Chance' && (
          <section className="absolute right-0 bottom-0 w-10 h-14 overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-blue-500 transform rotate-45 origin-bottom-left rounded-md"></div>
              <Link
                to="/metaxhora"
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
