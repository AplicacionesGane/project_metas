import { BarraProgressProduct } from '../components/ProgresoProducto';
import { HeaderComponent } from '../components/ui/headerComponent';
import { useFetchData } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { sortData } from '../utils/funtions';
import { MetasProI } from '../types/Metas';
import { useMemo, useState } from 'react';

function AspDiaPage() {
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

export default AspDiaPage
