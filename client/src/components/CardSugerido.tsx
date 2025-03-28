import { colorBackground, formatPrice, getColorVariant } from '../utils/funtions';
import { calcularPorcentaje } from '../utils/progress';
import { ProgressBar } from './tremor/ProgressBar';
import { Sugeridos } from '../types/Metas';
import { Badge } from './tremor/Bagde';
import { Card } from './tremor/Card';

export function CardSugerido({ sugerido }: { sugerido: Sugeridos }) {
  const percentage = calcularPorcentaje(sugerido.VTA_SUGERIDO, sugerido.META_VALOR);
  const bgColor = colorBackground(parseFloat(percentage));
  const variantColor = getColorVariant(parseFloat(percentage));

  return (
    <Card className={`w-1/2 ${bgColor}`} key={sugerido.ID}>
      <article className='flex justify-between py-2'>
        <h2 className='font-semibold text-lg'>Producto Sugerido:</h2>
        <span>-</span>
        <h2 className='font-semibold text-lg'>{sugerido.PRODUCTO || 'Aun No Se Ha Definido'} </h2>
      </article>

      <section className='flex justify-between py-2'>
        <article className='flex gap-2 items-center text-gray-600'>
          <p> Venta Actual:</p>
          <Badge variant='success'>{formatPrice(sugerido.VTA_SUGERIDO)}</Badge>
        </article>

        <article className='flex gap-2 items-center text-gray-600'>
          <p> Valor Sugerido:</p>
          <Badge variant='warning'>{formatPrice(sugerido.META_VALOR)}</Badge>
        </article>
      </section>

      <article className='flex flex-col items-center'>
        <p> <span>Progeso </span> &bull; {percentage} %</p>
        <ProgressBar value={parseInt(percentage)} variant={variantColor} className='mt-3' />
      </article>

      <article>
        {
          parseFloat(percentage) >= 100
            ? (
              <p className='pt-2 text-center'>Buen Trabajo 😁 - Meta Completada ✅  </p>
            )
            : null
        }
      </article>
    </Card>
  )
}