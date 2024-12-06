import { ProgressCircleComponent } from '../components/ui/ProgressCircle'
import { VentasDiaResumen } from '../components/ui/VentaDiaResumen'
import { GenerateQR } from '../components/ui/GeneraQrCod'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ResumenPage() {
  const { dataGeneral, user } = useAuth()
  const [data, setData] = useState({ ventaActual: 0, aspiracionDia: 0, cumplimiento: 0 })
  const [util, setUtil] = useState<{ cc_asesor: string, comision: number } | null>(null)

  const userName = dataGeneral?.user.NOMBRES!
  const nameCategoria = `${dataGeneral?.infCategoria.CATEGORIZACION!.toLocaleLowerCase()}.webp`

  useEffect(() => {
    axios.post('/metasDia', { codigo: user?.sucursal, zona: user?.zona })
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [user?.sucursal])

  useEffect(() => {
    axios.get(`/utilidades/${dataGeneral?.user.DOCUMENTO!}`)
      .then(res => setUtil(res.data))
  }, [dataGeneral?.user.DOCUMENTO!])

  return (
    <section className='w-full px-1 grid grid-cols-3 text-center font-semibold rounded-lg gap-2 text-gray-700 dark:text-white'>

      <h3 className='col-span-3 py-2 rounded-lg bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500 xl:text-lg 2xl:text-2xl 2xl:py-4'>
        <span>Bienvenid@</span> <span className='text-blue-700 dark:text-yellow-400 pl-2 xl:text-lg 2xl:text-2xl'>{dataGeneral?.user.NOMBRES}</span>
      </h3>

      <section className='col-span-1 flex flex-col gap-2'>

        <ProgressCircleComponent porcentaje={data.cumplimiento} />

        <VentasDiaResumen venta={data.ventaActual} aspiracion={data.aspiracionDia} />

        <div className='w-full flex items-center rounded-lg justify-center py-2 dark:bg-slate-200'>
          <GenerateQR codigo={user?.sucursal!} nombres={userName || 'undefined'} username={dataGeneral?.user.DOCUMENTO! || 'undefined'} />
        </div>

      </section>

      <figure className='col-span-2 flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md dark:border dark:border-gray-500'>
        <img src={nameCategoria} loading='lazy' alt='logo segun categoria' />
      </figure>
      {
        util !== null
          ? (
            <section className='bg-slate-300 dark:bg-slate-900 rounded-md dark:border dark:border-gray-500 mb-2'>
              <table className='w-full table-auto border-collapse'>
                <thead>
                  <tr>
                    <th>N° Documento</th>
                    <th>Referencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{util.cc_asesor}</td>
                    <td>{util.comision}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          )
          : (
            <section>
              <p>No se encontró información de la utilidad</p>
            </section>
          )

      }

    </section>
  )
}

export default ResumenPage
