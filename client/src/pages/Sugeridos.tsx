import { useSugeridos } from '../hooks/useSugeridos'
import { useSugeridos2 } from '../hooks/useSugeridos2'

import { ProgressSugerido } from '../components/ProgressSugerido'
import { ConsultarBoletasGanadas } from '../components/BoletaGanada'
import { useAuth } from '../auth/AuthContext'

function SugeridosPage () {
  const { profileData } = useAuth()

  const username = `CV${profileData?.user.DOCUMENTO}`

  const { data } = useSugeridos(profileData?.sucursal.CODIGO!, username, profileData?.sucursal.ZONA!)
  const { data2 } = useSugeridos2(profileData?.sucursal.CODIGO!, username, profileData?.sucursal.ZONA!)

  return (
    <section className='flex flex-col mx-2'>
      <h1 className='text-center text-3xl font-semibold py-2 dark:text-white'>Sugeridos Del Día </h1>

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
        <ConsultarBoletasGanadas codigo={profileData?.sucursal.CODIGO!} user={username} names={profileData?.user.NOMBRES || 'ninguno'} />
      </footer>

    </section>
  )
}

export default SugeridosPage
