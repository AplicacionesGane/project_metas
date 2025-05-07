import { ProgressCircleComponent } from '../components/ui/ProgressCircle';
import { VentasDiaResumen } from '../components/ui/VentaDiaResumen';
import { TableUtilidades } from '../components/ui/TableUtilidades';
import { GenerateQR } from '../components/ui/GeneraQrCod';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ResumenPage() {
  const { user, logout } = useAuth()
  const [data, setData] = useState({ ventaActual: 0, aspiracionDia: 0, cumplimiento: 0 })

  const userName = user?.user.NOMBRES!
  const nameCategoria = `${user?.sucursal.CATEGORIA.toLocaleLowerCase()}.webp`

  useEffect(() => {
    axios.post('/metasDia', { codigo: user?.sucursal.CODIGO, zona: user?.sucursal.ZONA })
      .then(res => setData(res.data))
      .catch(err => {
        if (err.response.status === 401) {
          logout()
        }
      })
  }, [])

  return (
    <section className='w-full px-1 grid grid-cols-3 text-center font-semibold rounded-lg gap-2 text-gray-700 dark:text-white'>

      <h3 className='col-span-3 py-2 rounded-lg bg-slate-50 border dark:bg-slate-900 dark:border dark:border-gray-500 xl:text-sm 2xl:text-lg 2xl:py-4'>
        <span>Bienvenid@</span> <span className='text-blue-700 dark:text-yellow-400 pl-2 xl:text-sm 2xl:text-lg'>{user?.user.NOMBRES}</span>
      </h3>

      <section className='col-span-1 flex flex-col gap-2'>

        <ProgressCircleComponent porcentaje={data.cumplimiento} />

        <VentasDiaResumen venta={data.ventaActual} aspiracion={data.aspiracionDia} />

        <div className='w-full flex items-center rounded-lg justify-center py-2 dark:bg-slate-200 bg-slate-50 border'>
          <GenerateQR codigo={user?.sucursal.CODIGO!} nombres={userName || 'undefined'} username={user?.user.DOCUMENTO! || 'undefined'} />
        </div>

      </section>

      <figure className='col-span-2 flex flex-col items-center justify-center bg-slate-50 border dark:bg-slate-900 rounded-md dark:border dark:border-gray-500'>
        <img className='w-44 2xl:w-72' src={nameCategoria === 'undefined.webp' ? 'imgdefect.webp' : nameCategoria} loading='lazy' alt='logo segun categoria' />
        {nameCategoria === 'undefined.webp' ? 'Sucursal Sin Categorizar ...' : ''}
      </figure>

      <section className='col-span-3 bg-gray-100 boder rounded-md border dark:bg-slate-900 dark:border dark:border-gray-500'>
        {user?.user.DOCUMENTO && <TableUtilidades document={user.user.DOCUMENTO} />}
      </section>

    </section>
  )
}

export default ResumenPage
