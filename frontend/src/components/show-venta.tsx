interface VentasDiaResumenProps {
  venta: number
  aspiracion: number
}

export function VentasDiaResumen({ venta, aspiracion }: VentasDiaResumenProps) {
  return (
    <article className='gap-4 py-3 flex flex-col rounded-md justify-around dark:text-white bg-slate-100 border dark:bg-slate-900 dark:border dark:border-gray-500 2xl:py-6'>
      <p className='text-xs gap-2 w-full flex justify-between px-4 '>
        <span className='font-bold text-xs 2xl:text-lg'>VENTA ACTUAL:</span>
        <span className='font-semibold text-xs 2xl:text-lg'>
          {(venta || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
        </span>
      </p>
      <p className='text-xs gap-2 w-full flex justify-between px-4'>
        <span className='font-bold text-xs 2xl:text-lg'>META DÍA:</span>
        <span className='font-semibold text-xs 2xl:text-lg'>
          {(aspiracion || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
        </span>
      </p>
    </article>
  )
}
