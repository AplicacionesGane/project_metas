import { useEffect, useState } from 'react';

const ONE_SECOND_IN_MS = 1000;

export function SimularReloj({ hora }: { hora: string }) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Inicializa el reloj con la hora recibida por props
    const initializeClock = () => {
      const setHora = hora.split(',')[1];
      const [hours, minutes, seconds] = setHora.split(':');
      const date = new Date();
      date.setHours(parseInt(hours));
      date.setMinutes(parseInt(minutes));
      date.setSeconds(parseInt(seconds));
      return date;
    };

    let currentTime = initializeClock();

    const updateClock = () => {
      // Incrementa el tiempo en 1 segundo
      currentTime.setSeconds(currentTime.getSeconds() + 1);

      const newHours = currentTime.getHours();
      const newMinutes = currentTime.getMinutes();
      const newSeconds = currentTime.getSeconds();

      setTime(
        `${newHours.toString().padStart(2, '0')}:${newMinutes
          .toString()
          .padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
      );
    };

    // Actualiza el reloj cada segundo
    const clockIntervalId = setInterval(updateClock, ONE_SECOND_IN_MS);

    return () => {
      clearInterval(clockIntervalId);
    };
  }, [hora]);

  return <div className=''>Hora: {time}</div>;
}