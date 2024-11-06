import { PdvInfo } from '../types/interfaces'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const useSucursalData = (codigo: number) => {
  const [pdv, setPdv] = useState<PdvInfo | null>(null)

  useEffect(() => {
    if (codigo !== 0) {
      axios.post('/infopdv', { codigo: codigo })
        .then((res) => {
          setPdv(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [codigo])

  return { pdv }
}