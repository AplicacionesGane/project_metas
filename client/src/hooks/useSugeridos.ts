import { getSugeridos } from '../services/Sugeridos'
import { useEffect, useState } from 'react'
import { Sugeridos } from '../types/Metas'

export const useSugeridos = () => {
  const [data, setData] = useState<Sugeridos[] | null>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSugeridos()
      .then(res => setData(res))
      .catch((error) => {
        setError(error.response.data.error || 'Error fetching data')
      })
  }, [])

  return { data, error }
}
