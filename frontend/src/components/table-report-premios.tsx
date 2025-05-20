import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getReportPremios } from "@/services/gerReportPremios";
import { type ReportPremios } from "@/types/DataInterface";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

export function TableReportPremios({ reRender, handleReload }: { reRender: boolean, handleReload: () => void }) {
  const [data, setData] = useState<ReportPremios[]>([])
  const [lastUpdate, setLastUpdate] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const getData = async () => {
      try {
        const data = await getReportPremios()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()

    const intervalId = setInterval(getData, 5 * 60 * 1000)

    return () => {
      clearInterval(intervalId)
      controller.abort()
    }

  }, [reRender])

  const handleClickReload = () => {
    handleReload()
    setLastUpdate(new Date().toLocaleString())
  }

  return (
    <>
      <CardHeader className="flex justify-between pb-4">
        <h2>Ultima actualización información: {lastUpdate}</h2>
        <Button variant='outline' onClick={handleClickReload}>
          Recargar <RefreshCw className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
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
    </>
  )
}
