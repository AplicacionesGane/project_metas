import { useFetchData } from '@/hooks/useFetchData';
import type { MetasProI } from '@/types/Metas';
import { useNavigate } from 'react-router';
import { sortData } from '@/lib/funtions';
import { useAuth } from '@/hooks/useAuth';
import { useMemo, useState } from 'react';

import { HeaderComponent } from '@/components/header-components';
import { BarraProgressProduct } from '@/components/progress-product';

export default function AspDiaPage() {
  const { data, error, loading, closeSesion } = useFetchData<MetasProI>('/cumpDiaProd')
  const navigate = useNavigate()
  const [isAscending, setIsAscending] = useState(false)
  const { logout } = useAuth()

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  if(closeSesion){
    logout()
    navigate('/')
    return null
  }

  if(error){
    return (
      <section>
        Se presentó un error al solicitar la Información, intenta cerras sesión y volver a iniciar.
      </section>
    )
  }

  return (
    <section className='px-1'>
      <HeaderComponent setIsAscending={setIsAscending} isLoading={loading} isAscending={isAscending} text='Día Actual' />
      <article className='grid xl:grid-cols-2 gap-2 px-1 2xl:grid-cols-3 3xl:grid-cols-4'>
        {
          sortedData.map(meta =>
            <BarraProgressProduct
              pruducto={meta.producto}
              ventaActual={meta.ventaActual}
              aspiracionDia={meta.aspiracionDia}
              percentage={parseFloat(meta.porcentaje)}
              percentage2={parseFloat(meta.porcentaje2)}
              key={meta.producto}
            />
          )
        }
      </article>
    </section>
  )
}