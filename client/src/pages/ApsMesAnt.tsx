import { useAuth } from '../auth/AuthContext'
import { BarraProgressProduct } from '../components/ProgresoProducto'
import { HeaderComponent } from '../components/ui/headerComponent'
import { useFecthMetasData } from '../hooks/useFetchData'
import { sortData } from '../utils/funtions'
import { useMemo, useState } from 'react'

function AspMenAntPage () {
  const { user} = useAuth()

  const { data, isLoading } = useFecthMetasData('/cumpMesAnt', user?.zona!, user?.sucursal!)
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  return (
    <section className='relative'>
      <HeaderComponent setIsAscending={setIsAscending} isAscending={isAscending} isLoading={isLoading} text='Mes Anterior' />
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

export default AspMenAntPage
