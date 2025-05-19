import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { type ReportPremios } from "@/types/DataInterface";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import axios from "axios";

export function TableReportPremios({ reRender }: { reRender: boolean }) {
  const [data, setData] = useState<ReportPremios[]>([])

  useEffect(() => {
    axios.get('/reportPremios')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [reRender])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha | Hora</TableHead>
          <TableHead>Tercero</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Nota</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className="text-center">
            <TableCell>{item.FECHACREATE}</TableCell>
            <TableCell>{item.TERCERO}</TableCell>
            <TableCell> {`$ ${Intl.NumberFormat('es-CO').format(item.VALOR)}`} </TableCell>
            <TableCell>
              <Badge variant={
                item.ESTADO === 'APROBADO'
                  ? 'default'
                  : item.ESTADO === 'RECHAZADO'
                    ? 'destructive'
                    : 'success'
              }>
                {item.ESTADO}
              </Badge>
            </TableCell>
            <TableCell title={item.NOTA || ''} className="ellipsis">{item.NOTA || ''}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
