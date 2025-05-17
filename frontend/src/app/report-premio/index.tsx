import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogUserCreate } from "@/components/create-new-report";
import { useAuth } from "@/hooks/useAuth"
import { useEffect, useState } from "react";

import { Navigate } from "react-router";
import { TableReportPremios } from "@/components/table-report-premios";

export default function ReportPremio() {
  const { user, login } = useAuth();
  const [reload, setReload] = useState(false);

  if(user?.maquinas === false) {
    return <Navigate to="/" replace />
  }

  const handleReload = () => {
    setReload(!reload)
  }

  useEffect(() => {
    // valida el token si no es válido redirige a login
    login()
  }, [])

  return (
    <Card className="h-[calc(100vh-7rem)]">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Reporte Premios Máquinas</CardTitle>
        <DialogUserCreate reload={handleReload} />
      </CardHeader>

      <CardContent>
        <TableReportPremios reRender={reload} />
      </CardContent>
    </Card>
  )
}