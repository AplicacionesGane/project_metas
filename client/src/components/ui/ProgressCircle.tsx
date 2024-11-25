import { ProgressCircle } from '../tremor/ProgressCircle'

interface ProgressCircleProps {
  porcentaje: number
}

const colorVariant = (porcentaje: number) => {
  if (porcentaje < 40) {
    return 'error'
  } else if (porcentaje >= 40 && porcentaje < 90) {
    return 'warning'
  } else if (porcentaje >= 90 && porcentaje < 99) {
    return 'default'
  } else if (porcentaje > 99) {
    return 'success'
  }
}

export function ProgressCircleComponent({ porcentaje }: ProgressCircleProps) {
  const variant = colorVariant(porcentaje)

  return (
    <section className='py-2 rounded-md dark:border dark:border-gray-500 bg-slate-300 dark:bg-slate-900 flex flex-col justify-around gap-2'>
      <h2 className='text-center text-md py-4 2xl:text-2xl'>Porcentaje De Meta Realizada</h2>
      <div className="flex items-center justify-center gap-x-5">
        <ProgressCircle variant={variant} value={porcentaje} radius={80} strokeWidth={20} >
          <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
            {porcentaje}%
          </span>
        </ProgressCircle>
      </div>

    </section>
  )
}
