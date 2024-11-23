import { ProgressCircle } from '../tremor/ProgressCircle'

interface ProgressCircleProps {
  porcentaje: number
}

export function ProgressCircleComponent({ porcentaje }: ProgressCircleProps) {
  let colorVarian: "default" | "neutral" | "warning" | "error" | "cyan" | "success" | undefined;

  if (porcentaje < 40) {
    colorVarian = 'error'
  } else if (porcentaje >= 40 && porcentaje < 70) {
    colorVarian = 'warning'
  } else if (porcentaje >= 70 && porcentaje < 99) {
    colorVarian = 'default'
  } else if (porcentaje > 99) {
    colorVarian = 'success'
  }

  return (
    <section className='py-2 rounded-md dark:border dark:border-gray-500 bg-slate-300 dark:bg-slate-900 flex flex-col justify-around gap-2'>
      <h2 className='text-center text-md py-4 2xl:text-2xl'>Porcentaje De Meta Realizada</h2>
      <div className="flex items-center justify-center gap-x-5">
        <ProgressCircle variant={colorVarian} value={porcentaje} radius={80} strokeWidth={20} >
          <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
            {porcentaje}%
          </span>
        </ProgressCircle>
      </div>

    </section>
  )
}
