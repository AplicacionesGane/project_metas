import { MetasProducto } from '../types/Metas'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

export function useFecthMetasData (url: string) {
  const [data, setData] = useState<MetasProducto[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [close, setClose] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(url)
        setData(response.data)
        setError(null)
      } catch (err: AxiosError | Error | unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 401) {
            setClose(true)
          } else {
            setError(new Error(err.response?.data.message || 'An error occurred'))
          }
        } else {
          setError(err as Error)
        }
        
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 5 * 60 * 1000) // Fetch data every 5 minutes

    return () => clearInterval(intervalId) // Clean up on unmount
  }, [url])

  return { data, isLoading, error, close }
}
