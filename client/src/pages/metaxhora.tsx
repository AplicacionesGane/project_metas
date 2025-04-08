import { AreaChart } from '../components/tremor/AreaChart';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ObjectEsperado {
  venta: number;
  hora: string;
  estimado: number;
}

export default function MetaXhora() {
  const ulrparam = useParams();
  const { producto, sucursal } = ulrparam;
  const [data, setData] = useState<ObjectEsperado[]>([]);

  useEffect(() => {
    axios.get<ObjectEsperado[]>(`/ventaxhora`, { params: { producto, sucursal } })
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
    </div>
  );
}