import { BarraProgressProduct } from '../components/ProgresoProducto';
import { HeaderComponent } from '../components/ui/headerComponent';
import { useFetchData } from '../hooks/useFetch';
import { useAuth } from '../auth/AuthContext';
import { sortData } from '../utils/funtions';
import { MetasProI } from '../types/Metas';
import { useMemo, useState } from 'react';

function AspMesPage() {
  const { logout } = useAuth()

  const { data, loading, closeSesion } = useFetchData<MetasProI>('/cumpMesAct')
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  if (closeSesion) {
    logout()
    return null
  }

  return (
    <section className='relative'>
      <HeaderComponent setIsAscending={setIsAscending} isAscending={isAscending} isLoading={loading} text='Mes Actual' />
      <article className='grid grid-cols-2 gap-2 px-1 2xl:grid-cols-3 3xl:grid-cols-4'>
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

export default AspMesPage
