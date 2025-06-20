import { TableUtilidades } from '@/components/table-utilidades';
import { PieChartComponent } from '@/components/ui/pie-chart';
import { VentasDiaResumen } from '@/components/show-venta';
import { GenerateQR } from '@/components/ui/generate-qr';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';

function ResumenPage() {
  const { user, logout } = useAuth()
  const [data, setData] = useState({ ventaActual: 0, aspiracionDia: 0, cumplimiento: 0 })

  const userName = user?.user.NOMBRES!
  const nameCategoria = user?.sucursal.CATEGORIA === null ? null : `${user?.sucursal.CATEGORIA.toLocaleLowerCase()}.webp`

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
    <section className='pt-1 grid text-center font-semibold rounded-lg gap-1 text-gray-700'>

      <h3 className='py-2 rounded-lg border text-sm xl:text-2xl'>
        <span className='text-gray-700 dark:text-white'>
          Bienvenid@
        </span>
        <span className='text-blue-700 dark:text-yellow-400 text-sm xl:text-2xl font-semibold pl-2'>
          {user?.user.NOMBRES}
        </span>
      </h3>

      <section className='grid gap-1 xl:grid-cols-2'>

        <PieChartComponent porcentaje={data.cumplimiento} />

        <Card className='flex flex-col items-center justify-center gap-2 p-4 '>
          <img
            className='w-44'
            src={nameCategoria === null ? 'imgdefect.webp' : nameCategoria}
            loading='lazy'
            alt='logo segun categoria'
          />
          {nameCategoria === null ? 'Sucursal Sin Categorizar ...' : ''}
        </Card>

        <VentasDiaResumen venta={data.ventaActual} aspiracion={data.aspiracionDia} />

        <GenerateQR codigo={user?.sucursal.CODIGO!} nombres={userName || 'undefined'} username={user?.user.DOCUMENTO! || 'undefined'} />
      </section>

       <section className=' boder rounded-md border'>
        {user?.user.DOCUMENTO && <TableUtilidades document={user.user.DOCUMENTO} />}
      </section>

    </section>
  )
}

export default ResumenPage
