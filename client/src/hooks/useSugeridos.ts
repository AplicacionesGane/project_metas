import { getSugeridos1 } from '../services/getSugeridos'
import { useEffect, useState } from 'react'
import { User } from '../types/User'
import { Sugeridos } from '../types/Metas'

export const useSugeridos = ({ zone, user }:{ zone: string, user: User}) => {
  const { username, codigo } = user
  const [data, setData] = useState<Sugeridos | null>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSugeridos1({ codigo, username, zone })
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        setError(error.response.data.error || 'Error fetching data')
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, error }
}
