import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className='h-screen w-screen flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-8'>Página No Existe</h2>
      <p className='text-lg text-gray-500 dark:text-gray-300 mb-8'>The page you are looking for does not exist.</p>
      <Link to='/' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'>
        Volver al Inicio
      </Link>
    </section>
  )
}