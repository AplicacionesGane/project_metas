import { useEffect, useState } from 'react'
import { MetasProducto } from '../types/Metas'
import axios from 'axios'

export function useFecthMetasData (url: string, company: string, codigo: number) {
  const [data, setData] = useState<MetasProducto[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(url, { params: { zona: company, codigo } })
        setData(response.data)
        setError(null)
      } catch (err) {
        setError(err as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 5 * 60 * 1000) // Fetch data every 5 minutes

    return () => clearInterval(intervalId) // Clean up on unmount
  }, [url, company, codigo])

  return { data, isLoading, error }
}
