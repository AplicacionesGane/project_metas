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
    <section className="py-4 px-2 rounded-md dark:border dark:border-gray-500 bg-slate-100 border dark:bg-slate-900 flex flex-col justify-around gap-4">
      <h2 className="text-center text-sm md:text-base lg:text-lg py-2">
        Porcentaje Meta Realizada
      </h2>
      <div className="flex items-center justify-center gap-x-5">
        <ProgressCircle
          variant={variant}
          value={porcentaje}
          radius={60} // Tamaño base
          strokeWidth={15} // Ancho base
          className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 2xl:w-44 2xl:h-44" // Tamaños responsivos
        >
          <span className="text-xs 2xl:text-base font-medium text-gray-900 dark:text-gray-50">
            {porcentaje}%
          </span>
        </ProgressCircle>
      </div>
    </section>
  )
}
