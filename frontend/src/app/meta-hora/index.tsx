import { useEffect, useState, Suspense, lazy } from 'react';
import { Card, CardHeader } from '@/components/ui/card';
import type { MetaXHoraResponse } from '@/types/Metas';
import { Loading } from '@/components/ui/Loading';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router';
import { TrendingUp } from 'lucide-react';
import axios from 'axios';

const LazyCharVentaHora2 = lazy(() => import('@/components/bar-char'));
const LazyChartVentaHora = lazy(() => import('@/components/chart-venta-hora'));

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
    <section className="p-1 sm:p-4 space-y-4 xl:overflow-y-auto xl:h-[calc(90vh-4rem)]">
      {/* Header Section */}
      <section className='flex flex-col sm:flex-row gap-3 sm:gap-2'>
        {/* Controls */}
        <div className='flex flex-col gap-2 w-full sm:w-auto'>
          <Button onClick={handleChartChange} variant='outline' className="w-full sm:w-auto">
            <span>Ver {changeChart ? 'Tabla' : 'Gráfico'}</span>
            <TrendingUp className="ml-2 h-4 w-4" />
          </Button>

          <Card className='p-3 sm:p-4'>
            <h1 className='text-sm sm:text-base text-gray-700 dark:text-white font-semibold text-center'>
              Acumulado:
            </h1>
            <p className={`text-lg sm:text-xl font-bold text-center ${data.acomulado > 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${Intl.NumberFormat('CO').format(data.acomulado).toString()}
            </p>
          </Card>
        </div>

        {/* Chart Section */}
        <section className='w-full min-h-[200px] sm:min-h-[300px]'>
          <Suspense fallback={<Loading />}>
            {changeChart ? <LazyCharVentaHora2 data={data.parsedResults} /> : <LazyChartVentaHora data={data.parsedResults} />}
          </Suspense>
        </section>
      </section>

      {/* Desktop Table View */}
      <Card className='hidden lg:block'>
        <CardHeader className='grid grid-cols-4 gap-4'>
          <p className='text-base font-semibold'>Horas</p>
          <p className='text-base font-semibold text-right'>Venta Total Hora</p>
          <p className='text-base font-semibold text-right'>Aspiración Hora</p>
          <p className='text-base font-semibold text-right'>Diferencia</p>
        </CardHeader> 
        {data.parsedResults.map((item, index) => (
          <Card key={index} className='grid grid-cols-4 gap-4 p-4'>
            <h2 className='text-xl font-bold text-blue-600'>{item.HORA} - {item.HORA.toString().split(':')[0]}:59</h2>
            <p className='text-base font-semibold text-right'>
              ${Intl.NumberFormat('CO').format(item.VTA_HORA).toString()}
            </p>
            <p className='text-base font-semibold text-right'>
              ${Intl.NumberFormat('CO').format(item.ASP_HORA).toString()}
            </p>
            <p className={`text-base font-semibold text-right ${item.DIF > 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${Intl.NumberFormat('CO').format(item.DIF).toString()}
            </p>
          </Card>
        ))}
        {data.metaNextHour.map((item, index) => (
          <Card key={index} className='grid grid-cols-4 gap-4 p-4'>
            <h2 className='text-xl font-bold text-blue-600'>{item.HORA} - {item.HORA.toString().split(':')[0]}:59</h2>
            <p className='text-base font-semibold text-right'>En ejecución ...</p>
            <p className='text-base text-sky-500 font-semibold text-right'>
              ${Intl.NumberFormat('CO').format(item.ASP_HORA).toString()}
            </p>
            <p className='text-base font-semibold text-right'>En ejecución ...</p>
          </Card>
        ))}
      </Card>

      {/* Mobile Card View */}
      <div className='lg:hidden space-y-3'>
        {data.parsedResults.map((item, index) => (
          <Card key={index} className='p-4 space-y-3'>
            {/* Header */}
            <div className='flex justify-between items-center border-b pb-2'>
              <h2 className='text-lg font-bold text-blue-600'>
                {item.HORA} - {item.HORA.toString().split(':')[0]}:59
              </h2>
              <span className={`text-sm font-semibold px-2 py-1 rounded ${item.DIF > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {item.DIF > 0 ? '+' : ''}${Intl.NumberFormat('CO').format(item.DIF)}
              </span>
            </div>
            
            {/* Values */}
            <div className='grid grid-cols-2 gap-3'>
              <div className='space-y-1'>
                <p className='text-xs text-gray-500 uppercase tracking-wide'>Venta Total</p>
                <p className='text-sm font-semibold'>
                  ${Intl.NumberFormat('CO').format(item.VTA_HORA)}
                </p>
              </div>
              <div className='space-y-1'>
                <p className='text-xs text-gray-500 uppercase tracking-wide'>Aspiración</p>
                <p className='text-sm font-semibold'>
                  ${Intl.NumberFormat('CO').format(item.ASP_HORA)}
                </p>
              </div>
            </div>
          </Card>
        ))}
        
        {data.metaNextHour.map((item, index) => (
          <Card key={index} className='p-4 space-y-3 border-dashed border-sky-300'>
            {/* Header */}
            <div className='flex justify-between items-center border-b pb-2'>
              <h2 className='text-lg font-bold text-blue-600'>
                {item.HORA} - {item.HORA.toString().split(':')[0]}:59
              </h2>
              <span className='text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded'>
                En ejecución
              </span>
            </div>
            
            {/* Values */}
            <div className='grid grid-cols-2 gap-3'>
              <div className='space-y-1'>
                <p className='text-xs text-gray-500 uppercase tracking-wide'>Venta Total</p>
                <p className='text-sm font-semibold text-gray-400'>
                  En ejecución...
                </p>
              </div>
              <div className='space-y-1'>
                <p className='text-xs text-gray-500 uppercase tracking-wide'>Aspiración</p>
                <p className='text-sm font-semibold text-sky-500'>
                  ${Intl.NumberFormat('CO').format(item.ASP_HORA)}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
