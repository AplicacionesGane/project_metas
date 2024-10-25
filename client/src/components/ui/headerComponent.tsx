import { Loading } from '../animations/Loading'
import { ArrowsIcon } from '../icons'

interface HeaderComponentProps {
  setIsAscending: (value: boolean) => void
  isLoading: boolean
  isAscending: boolean
  text: string
}

export function HeaderComponent ({ setIsAscending, isLoading, isAscending, text }: HeaderComponentProps) {
  return (
    <header className='w-full flex items-center justify-center gap-10 py-2 relative lg:text-sm xl:text-base 2xl:text-xl'>
      {isLoading ? <Loading /> : null}
      <h1 className='text-lg font-semibold dark:text-white'>Aspiración {text}</h1>
      <button
        onClick={() => setIsAscending(!isAscending)}
        className='flex items-center p-2 bg-blue-600 rounded-md gap-1 text-white font-semibold hover:bg-blue-500'
      >
        <p className='text-center'>Cambiar Orden</p>
        <ArrowsIcon />
      </button>
    </header>
  )
}
