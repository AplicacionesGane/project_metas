import axios from 'axios'

interface Time {
  fecha: string
}

interface Time2 {
  hora: string
}

export const getColombiaTimeFecha = async (): Promise<Time> => {
  const response = await axios.get('/dataTime')
  const { fecha } = await response.data
  return { fecha } as Time
}

export const getColombiaTimeHora = async (): Promise<Time2> => {
  const response = await axios.get('/dataTime2')
  const { hora } = await response.data
  return { hora } as Time2
}
