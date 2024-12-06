import { useEffect, useState } from 'react'
import { getSugeridos2 } from '../services/getSugeridos'
import { Sugeridos } from '../types/Metas'

export const useSugeridos2 = (codigo: number, user: string, zona: number) => {
  const [data2, setData2] = useState<Sugeridos | null>(null)
  const [error2, setError2] = useState(null)

  useEffect(() => {
    getSugeridos2(codigo, user, zona)
      .then((response) => {
        setData2(response)
      })
      .catch((error) => {
        setError2(error.response.data.error || 'Error fetching data')
      })
  }, [])

  return { data2, error2 }
}
