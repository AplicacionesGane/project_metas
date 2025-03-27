import { ProgressCircleComponent } from '../components/ui/ProgressCircle'
import { VentasDiaResumen } from '../components/ui/VentaDiaResumen'
import { TableUtilidades } from '../components/ui/TableUtilidades'
import { GenerateQR } from '../components/ui/GeneraQrCod'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ResumenPage() {
  const { profileData, funLogOut } = useAuth()
  const [data, setData] = useState({ ventaActual: 0, aspiracionDia: 0, cumplimiento: 0 })

  const userName = profileData?.user.NOMBRES!
  const nameCategoria = `${profileData?.infCategoria?.CATEGORIZACION!.toLocaleLowerCase()}.webp`

  useEffect(() => {
    axios.post('/metasDia', { codigo: profileData?.sucursal.CODIGO, zona: profileData?.sucursal.ZONA })
      .then(res => setData(res.data))
      .catch(err => {
        if (err.response.status === 401) {
          funLogOut()
        }
      })
  }, [profileData?.sucursal.CODIGO])

  return (
    <section className='w-full px-1 grid grid-cols-3 text-center font-semibold rounded-lg gap-2 text-gray-700 dark:text-white'>

      <h3 className='col-span-3 py-2 rounded-lg bg-slate-100 border dark:bg-slate-900 dark:border dark:border-gray-500 xl:text-sm 2xl:text-lg 2xl:py-4'>
        <span>Bienvenid@</span> <span className='text-blue-700 dark:text-yellow-400 pl-2 xl:text-sm 2xl:text-lg'>{profileData?.user.NOMBRES}</span>
      </h3>

      <section className='col-span-1 flex flex-col gap-2'>

        <ProgressCircleComponent porcentaje={data.cumplimiento} />

        <VentasDiaResumen venta={data.ventaActual} aspiracion={data.aspiracionDia} />

        <div className='w-full flex items-center rounded-lg justify-center py-2 dark:bg-slate-200 bg-slate-100 border'>
          <GenerateQR codigo={profileData?.sucursal.CODIGO!} nombres={userName || 'undefined'} username={profileData?.user.DOCUMENTO! || 'undefined'} />
        </div>

      </section>

      <figure className='col-span-2 flex flex-col items-center justify-center bg-slate-100 border dark:bg-slate-900 rounded-md dark:border dark:border-gray-500'>
        <img className='w-44 2xl:w-72' src={nameCategoria === 'undefined.webp' ? 'imgdefect.webp' : nameCategoria} loading='lazy' alt='logo segun categoria' />
        {nameCategoria === 'undefined.webp' ? 'Sucursal Sin Categorizar ...' : ''}
      </figure>

      <section className='col-span-3 bg-gray-100 boder rounded-md border dark:bg-slate-900 dark:border dark:border-gray-500'>
        {profileData?.user.DOCUMENTO && <TableUtilidades document={profileData.user.DOCUMENTO} />}
      </section>

    </section>
  )
}

export default ResumenPage
