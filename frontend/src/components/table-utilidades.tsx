import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { ComisionesI } from "@/types/DataInterface"
import axios from "axios"

export function TableUtilidades({ document }: { document: string }) {
  const [util, setUtil] = useState<ComisionesI[]>([])

  useEffect(() => {
    axios.get(`/utilidades/${document}`)
      .then(res => setUtil(res.data))
  }, [document])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>Documento</TableHead>
          <TableHead>Concepto</TableHead>
          <TableHead>N° Referencia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          util.map((item, index) => (
            <TableRow key={index} className="dark:text-gray-300">
              <TableCell>{item.FECHA}</TableCell>
              <TableCell>{item.DOCUMENTO}</TableCell>
              <TableCell>{item.CONCEPTO}</TableCell>
              <TableCell>{item.REFERENCIA}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>

  )
}