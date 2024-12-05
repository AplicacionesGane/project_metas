import { BarraProgressProduct } from '../components/ProgresoProducto'
import { useFecthMetasData } from '../hooks/useFetchData'
import { sortData } from '../utils/funtions'
import { useMemo, useState } from 'react'
import { HeaderComponent } from '../components/ui/headerComponent'
import { useAuth } from '../auth/AuthContext'

function AspMesPage () {
  const { dataGeneral} = useAuth()

  const codigo = dataGeneral?.codigo!
  const zona = dataGeneral?.sucursal.ZONA!


  const { data, isLoading } = useFecthMetasData('/cumpMesAct', zona, parseInt(codigo))
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  return (
    <section className='relative'>
      <HeaderComponent setIsAscending={setIsAscending} isAscending={isAscending} isLoading={isLoading} text='Mes Actual' />
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
