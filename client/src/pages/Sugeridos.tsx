import { ProgressSugerido } from '../components/ProgressSugerido'
import { useSugeridos } from '../hooks/useSugeridos'

function SugeridosPage () {
  const { data } = useSugeridos()

  return (
    <section className='flex flex-col mx-2'>
      <h1 className='text-center text-3xl font-semibold py-2 dark:text-white'>Sugeridos Del Día </h1>

      <main className='2xl:flex items-center gap-4'>
        <article className='2xl:grid-cols-2 gap-2 2xl:gap-6'>
          {data && <ProgressSugerido data={data} />}
        </article>
      </main>
    </section>
  )
}

export default SugeridosPage
