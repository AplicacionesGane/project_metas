import { BarraProgressProduct } from '@/components/progress-product';
import { HeaderComponent } from '@/components/header-components';
import { useFetchData } from '@/hooks/useFetchData';
import type { MetasProI } from '@/types/Metas';
import { useAuth } from '@/hooks/useAuth';
import { sortData } from '@/lib/funtions';
import { useMemo, useState } from 'react';

function AspMenAntPage () {
  const { logout} = useAuth()

  const { data, loading, closeSesion } = useFetchData<MetasProI>('/cumpMesAnt')
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  if(closeSesion) {
    logout()
    return null
  }

  return (
    <section className='relative'>
      <HeaderComponent setIsAscending={setIsAscending} isAscending={isAscending} isLoading={loading} text='Mes Ant' />
      <article className='grid xl:grid-cols-2 gap-2 px-1 2xl:grid-cols-3 3xl:grid-cols-4'>
        {data && (
          sortedData.map(meta => (
            <BarraProgressProduct
              key={meta.id} pruducto={meta.producto} ventaActual={meta.ventaActual} aspiracionDia={meta.aspiracionDia}
              percentage={parseFloat(meta.porcentaje)} percentage2={parseFloat(meta.porcentaje2)}
            />
          ))
        )}
      </article>
    </section>
  )
}

export default AspMenAntPage
