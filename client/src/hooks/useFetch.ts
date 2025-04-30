import { useEffect, useState } from 'react'
import axios from 'axios';

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
  closeSesion: boolean;
}

export const useFetchData = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null)
  const [closeSesion, setCloseSesion] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorType>(null)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url, controller);

        if(response.status === 401){
          setCloseSesion(true)
        }

        if(response.status !== 200){
          throw new Error(`Response to fetch: ${response.status}`)
        }
        setData(response.data)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 5 * 60 * 1000)

    return () => {
      clearInterval(intervalId)
      controller.abort();
    }
  }, [url])

  return { data, loading, error, closeSesion }
}