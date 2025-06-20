import { CardSugerido } from '@/components/card-sugerido';
import { useSugeridos } from '@/hooks/useSugeridos';

function SugeridosPage() {
  const { data } = useSugeridos()

  return (
    <section className='flex flex-col mx-2'>
      <h1 className='text-center text-3xl font-semibold py-2 dark:text-white'>Sugeridos Del Día </h1>

      <main className='grid xl:grid-cols-2 gap-2'>
        {data?.map(sug => <CardSugerido sugerido={sug} key={sug.ID} />)}
      </main>
    </section>
  )
}

export default SugeridosPage
