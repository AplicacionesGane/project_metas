import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { type ReportPremios } from "@/types/DataInterface"
import { useEffect, useState } from "react"
import axios from "axios"

export function TableReportPremios() {
  const [data, setData] = useState<ReportPremios[]>([])

  useEffect(() => {
    axios.get('/reportPremios')
      .then(res => setData(res.data))
      .catch(err => console.log(err))

  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>Tercero</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className="text-center">
            <TableCell>{item.FECHA}</TableCell>
            <TableCell>{item.TERCERO}</TableCell>
            <TableCell> {`$ ${Intl.NumberFormat('es-CO').format(item.VALOR)}`} </TableCell>
            <TableCell>{item.ESTADO}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
