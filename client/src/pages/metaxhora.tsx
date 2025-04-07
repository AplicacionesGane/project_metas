import { AreaChart } from '../components/tremor/AreaChart';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface MetaXhoraData {
  HORA: number;
  VENTA: string;
}

export default function MetaXhora() {
  const ulrparam = useParams();
  const { producto, sucursal } = ulrparam;
  const [data, setData] = useState<MetaXhoraData[]>([]);

  useEffect(() => {
    axios.get<MetaXhoraData[]>(`/metaxhoras`, { params: { producto } })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })

  }, [producto, sucursal]);

  return (
    <div>
      <h1 className='text-2xl font-semibold text-gray-800 mb-6 text-center uppercase'>Aspiración x Hora - {producto}</h1>
      <AreaChart
        className='h-80'
        data={data}
        index='hora'
        categories={['aspiracion', 'ventaHora']}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat('us').format(number).toString()}`
        }
        onValueChange={(v) => console.log(v)}
      />

      <div className='bg-gray-50 p-6 rounded-lg shadow-lg'>
        {
          data.map((item, index) => (
            <div key={index} className='grid grid-cols-4 gap-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 m-4'>
              <h2 className='text-xl font-bold text-blue-600 col-span-1'>{item.HORA}:00 - {item.HORA.toString().split(':')[0]}:59</h2>
              <p className='text-base text-gray-700 col-span-1'>
                <span className='font-semibold text-gray-900'>Venta Esta Hora:</span>
                {` $${Intl.NumberFormat('CO').format(parseInt(item.VENTA)).toString()}`}
              </p>
              {/* <p className='text-base text-gray-700 col-span-1'>
                <span className='font-semibold text-gray-900'>Venta Aspiración:</span>
                {` $${Intl.NumberFormat('CO').format(item.aspiracion).toString()}`}
              </p> */}
              {/* <p className='text-base text-gray-700 col-span-1'>
                <span className='font-semibold text-gray-900'>Venta Acomulada:</span>
                {` $${Intl.NumberFormat('CO').format(item.ventaAcumulada).toString()}`}
              </p> */}
            </div>
          ))
        }
      </div>
    </div>
  );
}