import { Progress } from '@/components/ui/progress';
import { colorBackground } from '@/lib/funtions'
import { type Sugeridos } from '@/types/DataInterface';
import { formatPrice } from '@/lib/funtions';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const calcularPorcentaje = (ventaActual: number, metaValor: number): number => {
  const porcentaje = (ventaActual / metaValor) * 100;
  return parseFloat(Math.min(100, porcentaje).toFixed(2));
};

export function CardSugerido({ sugerido }: { sugerido: Sugeridos }) {
  const percentage = calcularPorcentaje(sugerido.VTA_SUGERIDO, sugerido.META_VALOR);

  return (
    <Card className={`w-full shadow-md p-4 sm:p-6 ${colorBackground(percentage, 'light')}`} key={sugerido.ID}>
      {/* Header */}
      <article className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-2 mb-4'>
        <h2 className='font-semibold text-base sm:text-lg text-center sm:text-left'>Producto Sugerido:</h2>
        <span className='hidden sm:inline'>-</span>
        <h2 className='font-semibold text-base sm:text-lg text-center sm:text-right break-words'>
          {sugerido.PRODUCTO || 'Aun No Se Ha Definido'}
        </h2>
      </article>

      {/* Values Section */}
      <section className='flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between mb-4'>
        <article className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-center text-gray-700 dark:text-white'>
          <p className='text-sm sm:text-base font-medium'>Venta Actual:</p>
          <Badge variant='success' className='text-xs sm:text-sm px-2 py-1'>
            {formatPrice(sugerido.VTA_SUGERIDO)}
          </Badge>
        </article>

        <article className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-center text-gray-700 dark:text-white'>
          <p className='text-sm sm:text-base font-medium'>Valor Sugerido:</p>
          <Badge className='text-xs sm:text-sm px-2 py-1'>
            {formatPrice(sugerido.META_VALOR)}
          </Badge>
        </article>
      </section>

      {/* Progress Section */}
      <article className='flex flex-col gap-3 sm:gap-4 mb-4'>
        <div className='flex flex-col sm:flex-row gap-2 items-center justify-center text-gray-700 dark:text-white'>
          <p className='text-sm sm:text-base font-medium'>Progreso Actual:</p>
          <Badge variant='default' className='shadow text-xs sm:text-sm px-2 py-1'>
            {percentage}%
          </Badge>
        </div>
        <Progress value={percentage} />
      </article>

      {/* Success Message */}
      <article>
        {percentage >= 100 && (
          <p className='pt-2 text-center text-sm sm:text-base font-medium text-green-600 dark:text-green-400'>
            Buen Trabajo 😁 - Meta Completada ✅
          </p>
        )}
      </article>
    </Card>
  )
}