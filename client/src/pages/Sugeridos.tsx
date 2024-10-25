import { useSugeridos } from '../hooks/useSugeridos'
import { useSugeridos2 } from '../hooks/useSugeridos2'

import { ProgressSugerido } from '../components/ProgressSugerido'
import { ConsultarBoletasGanadas } from '../components/BoletaGanada'
import { User } from '../types/User'

function SugeridosPage ({ zone, user }:{zone: string, user: User}) {
  const { data } = useSugeridos({ zone, user })
  const { data2 } = useSugeridos2({ zone, user })

  console.log(data)
  console.log(data2)

  return (
    <section className='flex flex-col mx-2'>
      <h1 className='text-center text-3xl font-semibold py-2'>Sugeridos Del Día </h1>

      <main className='2xl:flex items-center gap-4'>
        <article className='2xl:grid-cols-2 gap-2 2xl:gap-6'>
          {data && <ProgressSugerido data={data} />}
        </article>

        {
          data && data2?.VTA_SUGERIDO && data.VTA_SUGERIDO > data.META_SUG1
            ? (
              <article className='2xl:grid-cols-2 gap-2 2xl:gap-6'>
                <ProgressSugerido data={data2} />
              </article>
              )
            : null
        }
      </main>

      <footer className='py-2'>
        <ConsultarBoletasGanadas codigo={user.codigo} user={user.username} names={user.nombres} />
      </footer>

    </section>
  )
}

export default SugeridosPage
