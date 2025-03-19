import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../tremor/Table"
import { ComisionesI } from "../../types/Metas"
import axios from "axios"

export function TableUtilidades({ document }: { document: string }) {
  const [util, setUtil] = useState<ComisionesI[]>([])

  useEffect(() => {
    axios.get(`/utilidades/${document}`)
      .then(res => setUtil(res.data))
  }, [document])

  return (
    <TableRoot>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Fecha</TableHeaderCell>
            <TableHeaderCell>Documento</TableHeaderCell>
            <TableHeaderCell>Concepto</TableHeaderCell>
            <TableHeaderCell>N° Referencia</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            util.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.FECHA}</TableCell>
                <TableCell>{item.DOCUMENTO}</TableCell>
                <TableCell>{item.CONCEPTO}</TableCell>
                <TableCell>{item.REFERENCIA}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableRoot>
  )
}