import axios from 'axios'
import { useEffect, useState } from 'react'

export function ConsultarBoletasGanadas ({ codigo, user, names }: { codigo: number, user: string, names: string }) {
  const [data, setData] = useState<{ boletas: number }>({ boletas: 0 })
  useEffect(() => {
    axios.post('/boletasGanadas', { codigo, user })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    data && (
      <div className='flex bg-blue-300 dark:bg-gray-700 items-center w-full justify-around py-2 px-4 rounded-lg'>
        <p className='font-semibold'> {names} </p>
        <p>N° Boletas Ganadas: <span className='font-semibold'> {data.boletas}</span> 🥇 </p>
      </div>
    )
  )
}
