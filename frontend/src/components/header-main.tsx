import { SimularReloj } from "@/components/ui/simular-reloj";
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';

function HeaderMain() {
  const { user } = useAuth()
  const [fecha, setFecha] = useState<string>('')

  useEffect(() => {
    const fetchTime = async () => {
      const response = await axios.get<string>('/dataTime')

      if (response.status !== 200) {
        throw new Error('Ocurrio un error al obtener la hora desde el servidor')
      }

      setFecha(response.data)
    }

    fetchTime()

    const intervalId = setInterval(fetchTime, 5 * 60 * 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <article className='flex items-center justify-center text-center border text-xs 2xl:text-lg py-1 shadow rounded-md font-semibold'>
        <div className=''>Fecha: {fecha.split(',', 1)}</div>
      </article>
      <article className='flex items-center justify-center text-center border text-xs 2xl:text-lg py-1 shadow rounded-md font-semibold'>
        {
          fecha && <SimularReloj key='horaStringDateTime' hora={fecha} />
        }
      </article>
      <article className='flex items-center justify-center text-center border text-xs 2xl:text-lg py-1 shadow rounded-md font-semibold gap-4'>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>
          {user?.sucursal.NOMBRE}
        </div>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>
          {user?.sucursal.SUPERVISOR}
        </div>
      </article>
      <article className='flex items-center justify-center text-center border text-xs 2xl:text-lg py-1 shadow rounded-md font-semibold'>
        <div className=' overflow-hidden overflow-ellipsis whitespace-nowrap'>
          {
            user?.sucursal.CATEGORIA === null
              ? 'Sin Categoría'
              : user?.sucursal.CATEGORIA
          }
        </div>
      </article>
    </>
  )
}

export default HeaderMain