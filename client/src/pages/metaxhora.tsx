import { AreaChart } from '../components/tremor/AreaChart';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ObjectEsperado {
  venta: number;
  hora: string;
  estimado: number;
  ventaEstaHora: number;
}

export default function MetaXhora() {
  const ulrparam = useParams();
  const { producto, sucursal } = ulrparam;
  const [data, setData] = useState<ObjectEsperado[]>([]);

  useEffect(() => {
    axios.get<ObjectEsperado[]>(`/metaxhoras`, { params: { producto, sucursal } })
      .then((response) => {
        console.log('Response:', response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })

  }, [producto, sucursal]);

  return (
    <div>
      <AreaChart
        className="h-80"
        data={data}
        index="hora"
        categories={["venta", "estimado"]}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat("us").format(number).toString()}`
        }
        onValueChange={(v) => console.log(v)}
      />

      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Meta por Hora {producto}</h1>

        {
          data.map((item, index) => (
            item.venta !== 0 && item.ventaEstaHora !== 0 ? (
              <div
                key={index}
                className="grid grid-cols-4 gap-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 m-4"
              >
                <h2 className="text-xl font-bold text-blue-600 col-span-1">{item.hora}</h2>
                <p className="text-base text-gray-700 col-span-1">
                  <span className="font-semibold text-gray-900">Venta Acumulada:</span>
                  {` $${Intl.NumberFormat("CO").format(item.venta).toString()}`}
                </p>
                <p className="text-base text-gray-700 col-span-1">
                  <span className="font-semibold text-gray-900">Estimado:</span>
                  {` $${Intl.NumberFormat("CO").format(item.estimado).toString()}`}
                </p>
                <p className="text-base text-gray-700 col-span-1">
                  <span className="font-semibold text-gray-900">Venta Esta Hora:</span>
                  {` $${Intl.NumberFormat("CO").format(item.ventaEstaHora).toString()}`}
                </p>
              </div>
            ) : null
          ))
        }
      </div>
    </div>
  );
}