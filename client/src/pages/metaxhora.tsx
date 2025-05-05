import { AreaChart } from '../components/tremor/AreaChart';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../components/tremor/Card';

export interface MetaXhoraData {
  ID: number;
  HORA: string;
  VTAH: number;
  METAH: number;
  DIF: number;
}

export interface MetaXHoraResponse {
  parsedResults: MetaXhoraData[];
  metaNextHour: MetaXhoraData[];
  acomulado: number;
}

export default function MetaXhora() {
  const ulrparam = useParams();
  const { producto, sucursal } = ulrparam;
  const [data, setData] = useState<MetaXHoraResponse>({
    parsedResults: [],
    metaNextHour: [],
    acomulado: 0
  });

  useEffect(() => {
    axios.get<MetaXHoraResponse>(`/metaxhoras`, { params: { producto } })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })

  }, [producto, sucursal]);

  return (
    <section className='relative'>
      <h1 className='text-2xl font-semibold text-gray-800 mb-6 text-center uppercase'>Aspiración x Hora - {producto}</h1>

      <Card className='w-44 absolute top-0 left-2 p-2 py-4'>
        <h1 className='text-base text-gray-700 col-span-1 text-right font-semibold flex flex-col items-center'>Acomulado:</h1>
        <p className={`text-xl text-gray-700 col-span-1 text-right font-semibold flex flex-col items-center ${data.acomulado > 0 ? 'text-green-500' : 'text-red-500'}`}>
          <span>{` $${Intl.NumberFormat('CO').format(data.acomulado).toString()}`}</span>
        </p>
      </Card>

      <section className='px-2'>
        <AreaChart
          className='h-80'
          data={data.parsedResults}
          index='HORA'
          categories={['VTAH', 'METAH']}
          valueFormatter={(number: number) =>
            `$${Intl.NumberFormat('us').format(number).toString()}`
          }
          onValueChange={(v) => console.log(v)}
        />
      </section>

      <div className='bg-gray-50 p-6 rounded-lg shadow-lg'>
        <div className='grid grid-cols-4 gap-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 m-4'>
          <p className='text-base text-gray-700 col-span-1'>
            <span className='font-semibold text-gray-900'>Horas</span>
          </p>
          <p className='text-base text-gray-700 col-span-1 text-right'>
            <span className='font-semibold text-gray-900'>Venta Total Hora</span>
          </p>
          <p className='text-base text-gray-700 col-span-1 text-right'>
            <span className='font-semibold text-gray-900'>Aspiración Hora</span>
          </p>
          <p className='text-base text-gray-700 col-span-1 text-right'>
            <span className='font-semibold text-gray-900'>Diferencia</span>
          </p>
        </div>
        {
          data.parsedResults.map((item, index) => (
            <div key={index} className='grid grid-cols-4 gap-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 m-4'>
              <h2 className='text-xl font-bold text-blue-600 col-span-1'>{item.HORA} - {item.HORA.toString().split(':')[0]}:59</h2>
              <p className='text-base text-gray-700 col-span-1 text-right font-semibold'>
                {` $${Intl.NumberFormat('CO').format(item.VTAH).toString()}`}
              </p>
              <p className='text-base text-gray-700 col-span-1 text-right font-semibold'>
                {` $${Intl.NumberFormat('CO').format(item.METAH).toString()}`}
              </p>
              <p className={`text-base text-gray-700 col-span-1 text-right font-semibold ${item.DIF > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {` $${Intl.NumberFormat('CO').format(item.DIF).toString()}`}
              </p>
            </div>
          ))
        }
        {
          data.metaNextHour.map((item, index) => (
            <div key={index} className='grid grid-cols-4 gap-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 m-4'>
              <h2 className='text-xl font-bold text-blue-600 col-span-1'>{item.HORA} - {item.HORA.toString().split(':')[0]}:59</h2>
              <p className='text-base text-gray-700 col-span-1 text-right font-semibold'>
                En ejecución ...
              </p>
              <p className='text-base text-sky-500 col-span-1 text-right font-semibold'>
                {` $${Intl.NumberFormat('CO').format(item.METAH).toString()}`}
              </p>
              <p className={`text-base text-gray-700 col-span-1 text-right font-semibold`}>
                En ejecución ...
              </p>
            </div>
          ))
        }
      </div>
    </section>
  );
}