import { useEffect, useState, Suspense, lazy } from 'react';
import { Loading } from '@/components/ui/Loading';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { useParams } from 'react-router';
import { TrendingUp } from 'lucide-react';
import axios from 'axios';

const LazyCharVentaHora2 = lazy(() => import('@/components/bar-char'));
const LazyChartVentaHora = lazy(() => import('@/components/chart-venta-hora'));

export interface MetaXhoraData {
  ID: number;
  HORA: string;
  VTA_HORA: number;
  META_HORA: number;
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
  const [data, setData] = useState<MetaXHoraResponse>({ parsedResults: [], metaNextHour: [], acomulado: 0 });
  const [changeChart, setChangeChart] = useState(true);

  useEffect(() => {
    axios.get<MetaXHoraResponse>(`/metaxhoras`, { params: { producto } })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })

  }, [producto, sucursal]);

  const handleChartChange = () => {
    setChangeChart(!changeChart);
  }

  return (
    <section>
      <section className='flex gap-2 px-2'>

        <div className='flex flex-col gap-2'>
          <Button onClick={handleChartChange} variant='outline'>
            <span>Ver {changeChart ? 'Tabla' : 'Gráfico'}</span>
            <TrendingUp />
          </Button>

          <Card className=''>
            <h1 className='text-base text-gray-700 dark:text-white col-span-1 text-right font-semibold flex flex-col items-center'>Acomulado:</h1>
            <p className={`text-xl text-gray-700 dark:text-white col-span-1 text-right font-semibold flex flex-col items-center ${data.acomulado > 0 ? 'text-green-500' : 'text-red-500'}`}>
              <span>{` $${Intl.NumberFormat('CO').format(data.acomulado).toString()}`}</span>
            </p>
          </Card>

        </div>

        <section className='w-full'>
        <Suspense fallback={<Loading />}>
          {changeChart ? <LazyCharVentaHora2 data={data.parsedResults} /> : <LazyChartVentaHora data={data.parsedResults} />}
        </Suspense>
      </section>

      </section>

      <Card >
        <CardHeader className='grid grid-cols-4 '>
          <p className='text-base  col-span-1'>
            <span className='font-semibold '>Horas</span>
          </p>
          <p className='text-base  col-span-1 text-right'>
            <span className='font-semibold '>Venta Total Hora</span>
          </p>
          <p className='text-base  col-span-1 text-right'>
            <span className='font-semibold '>Aspiración Hora</span>
          </p>
          <p className='text-base  col-span-1 text-right'>
            <span className='font-semibold '>Diferencia</span>
          </p>
        </CardHeader> 
        {
          data.parsedResults.map((item, index) => (
            <Card key={index} className='grid grid-cols-4'>
              <h2 className='text-xl font-bold text-blue-600 col-span-1'>{item.HORA} - {item.HORA.toString().split(':')[0]}:59</h2>
              <p className='text-base  col-span-1 text-right font-semibold'>
                {` $${Intl.NumberFormat('CO').format(item.VTA_HORA).toString()}`}
              </p>
              <p className='text-base  col-span-1 text-right font-semibold'>
                {` $${Intl.NumberFormat('CO').format(item.META_HORA).toString()}`}
              </p>
              <p className={`text-base  col-span-1 text-right font-semibold ${item.DIF > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {` $${Intl.NumberFormat('CO').format(item.DIF).toString()}`}
              </p>
            </Card>
          ))
        }
        {
          data.metaNextHour.map((item, index) => (
            <Card key={index} className='grid grid-cols-4'>
              <h2 className='text-xl font-bold text-blue-600 col-span-1'>{item.HORA} - {item.HORA.toString().split(':')[0]}:59</h2>
              <p className='text-base  col-span-1 text-right font-semibold'>
                En ejecución ...
              </p>
              <p className='text-base text-sky-500 col-span-1 text-right font-semibold'>
                {` $${Intl.NumberFormat('CO').format(item.META_HORA).toString()}`}
              </p>
              <p className={`text-base  col-span-1 text-right font-semibold`}>
                En ejecución ...
              </p>
            </Card>
          ))
        }
      </Card>
    </section>
  );
}