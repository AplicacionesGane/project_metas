import type { MetasProI, MetasProducto } from '@/types/Metas';
import { useFetchData } from '@/hooks/useFetchData';
import { useNavigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import { useMemo, useState } from 'react';

import { HeaderComponent } from '@/components/header-components';
import { BarraProgressProduct } from '@/components/progress-product';

export function sortData (data: MetasProducto[], isAscending: boolean): MetasProducto[] {
  return [...data].sort((a, b) => {
    // Siempre coloca el elemento con id 'especial' en primer lugar
    if (a.id === 17 || a.id === 18) return -1
    if (b.id === 17 || b.id === 18) return 1

    // Para todos los demás elementos, ordena por porcentaje
    return isAscending ? parseFloat(a.porcentaje) - parseFloat(b.porcentaje) : parseFloat(b.porcentaje) - parseFloat(a.porcentaje)
  })
}


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
      <article className='grid grid-cols-2 gap-2 px-1 2xl:grid-cols-3 3xl:grid-cols-4'>
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