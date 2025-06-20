import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center px-4 py-8'>
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center'>
        404
      </h1>
      <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-center'>
        Página No Existe
      </h2>
      <p className='text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-300 mb-6 sm:mb-8 text-center max-w-md px-2'>
        La página que buscas no existe o ha sido movida.
      </p>
      <Link 
        to='/' 
        className='px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105'
      >
        Volver al Inicio
      </Link>
    </section>
  )
}