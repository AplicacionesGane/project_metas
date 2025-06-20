import { Card } from "./ui/card"

interface VentasDiaResumenProps {
  venta: number
  aspiracion: number
}

export function VentasDiaResumen({ venta, aspiracion }: VentasDiaResumenProps) {
  return (
    <Card className="flex flex-col items-center justify-center gap-2 p-4">
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
    </Card>
  )
}
