import { getColombiaTimeHora } from '../../services/time.services'
import { Loading } from '../animations/Loading'
import { useEffect, useState } from 'react'

const ONE_SECOND_IN_MS = 1000
const TEN_MINUTES_IN_MS = 10 * 60 * 1000

export function SimularReloj () {
  const [hora, setHora] = useState<string>('')

  useEffect(() => {
    const fetchTime = () => {
      getColombiaTimeHora()
        .then(res => { setHora(res.hora) })
    }

    fetchTime()
    const fetchIntervalId = setInterval(fetchTime, TEN_MINUTES_IN_MS)

    return () => {
      clearInterval(fetchIntervalId)
    }
  }, [])

  useEffect(() => {
    const updateClock = () => {
      const [hours, minutes, seconds] = hora.split(':')
      const date = new Date()
      date.setHours(parseInt(hours))
      date.setMinutes(parseInt(minutes))
      date.setSeconds(parseInt(seconds) + 1)

      const newHours = date.getHours()
      const newMinutes = date.getMinutes()
      const newSeconds = date.getSeconds()

      setHora(`${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`)
    }

    const clockIntervalId = setInterval(updateClock, ONE_SECOND_IN_MS)

    return () => {
      clearInterval(clockIntervalId)
    }
  }, [hora])

  return (
    <div className=''> Hora: {hora || <Loading />}</div>
  )
}
