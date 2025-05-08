import { formatPrice } from '@/lib/funtions';
import { Progress } from '@/components/ui/progress';
import { type Sugeridos } from '@/types/interfaces';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const calcularPorcentaje = (ventaActual: number, metaValor: number): number => {
  const porcentaje = (ventaActual / metaValor) * 100;
  return parseFloat(porcentaje.toFixed(2));
};

export function CardSugerido({ sugerido }: { sugerido: Sugeridos }) {
  const percentage = calcularPorcentaje(sugerido.VTA_SUGERIDO, sugerido.META_VALOR);

  return (
    <Card className={`w-full shadow-md`} key={sugerido.ID}>
      <article className='flex justify-between py-2'>
        <h2 className='font-semibold text-lg'>Producto Sugerido:</h2>
        <span>-</span>
        <h2 className='font-semibold text-lg'>{sugerido.PRODUCTO || 'Aun No Se Ha Definido'} </h2>
      </article>

      <section className='flex justify-between py-2'>
        <article className='flex gap-2 items-center text-gray-700'>
          <p> Venta Actual:</p>
          <Badge className='shadow-md'>{formatPrice(sugerido.VTA_SUGERIDO)}</Badge>
        </article>

        <article className='flex gap-2 items-center text-gray-700'>
          <p> Valor Sugerido:</p>
          <Badge className='shadow-md'>{formatPrice(sugerido.META_VALOR)}</Badge>
        </article>
      </section>

      <article className=''>
        <div className='flex gap-2 items-center justify-center text-gray-700'>
          <p>Progreso Actual: </p>
          <Badge variant='default' className='shadow'>{percentage} %</Badge>
        </div>
        <Progress value={percentage} />
      </article>

      <article>
        {/*
          parseFloat(percentage) >= 100
            ? (
              <p className='pt-2 text-center'>Buen Trabajo 😁 - Meta Completada ✅  </p>
            )
            : null
        */}
      </article>
    </Card>
  )
}