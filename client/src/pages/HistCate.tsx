import { HistComponent, TitleComponent } from '../components/HistoCatComp'
import { Historial } from '../types/interfaces'
import { useEffect, useState } from 'react'
import axios from 'axios'

function HistCatPage ({ codigo }: { codigo: number }) {
  const [historial, setHistorial] = useState<Historial[]>([])

  useEffect(() => {
    axios.get('/historial', { params: { codigo } })
      .then(res => { setHistorial(res.data) })
      .catch(err => { console.log(err) })
  }, [codigo])

  const annoActual = new Date().getFullYear()
  const annoAnterior = annoActual - 1

  const historialActual = historial.filter(hist => hist.ANHO === annoActual)
  const historialAnterior = historial.filter(hist => hist.ANHO === annoAnterior)

  return (
    <section className='flex gap-2 mx-1'>

      <section className='w-6/12 border border-slate-300 rounded-md'>
        <TitleComponent textStr={`Histórico Categorías ${annoAnterior}`} />
        <HistComponent data={historialAnterior} />
      </section>

      <section className='w-6/12 border border-slate-300 rounded-md'>
        <TitleComponent textStr={`Histórico Categorías ${annoActual}`} />
        <HistComponent data={historialActual} />
      </section>
    </section>
  )
}

export default HistCatPage
