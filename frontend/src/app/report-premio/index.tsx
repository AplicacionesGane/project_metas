import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogUserCreate } from "@/components/create-new-report";
import { useAuth } from "@/hooks/useAuth"
import { useState } from "react";

import { Navigate } from "react-router";

export default function ReportPremio() {
  const { user } = useAuth();
  const [reload, setReload] = useState(false);

  if(user?.maquinas === false) {
    return <Navigate to="/" replace />
  }

  const handleReload = () => {
    setReload(!reload)
  }

  return (
    <Card className="h-[calc(100vh-7rem)]">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Reporte Premios Máquinas</CardTitle>
        <DialogUserCreate reload={handleReload} />
      </CardHeader>

      <CardContent>
        Lista Reportes generados día actual
      </CardContent>
    </Card>
  )
}