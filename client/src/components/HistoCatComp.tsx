import RenderCategoria from './ui/RenderCategoria'
import { CategoriasI } from '../types/interfaces'

export function HistComponent ({ data }:{data: CategoriasI[]}) {
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  return (
    <article className='grid grid-cols-3'>
      {
      data.map(hist => (
        <ul key={hist.MES} className='flex flex-col w-full items-center gap-2 pt-2'>
          <p className='w-full text-center font-semibold text-lg dark:text-white'>{meses[hist.MES - 1]}</p>
          <figure className='lg:w-20 xl:w-28 2xl:w-32 3xl:w-40'>
            <RenderCategoria cat={hist.CATEGORIA.toLocaleLowerCase()} />
          </figure>
        </ul>
      ))
    }
    </article>
  )
}

export function TitleComponent ({ textStr }: {textStr: string}) {
  return (
    <h1 className='bg-slate-300 p-2 rounded-md font-semibold text-center text-xl lg:text-sm 2xl:text-xl 3xl:text-2xl'>{textStr}</h1>
  )
}
