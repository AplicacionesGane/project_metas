import { useAuth } from "@/hooks/useAuth"

import { Navigate, redirect } from "react-router";

export default function ReportPremio() {
  const { user } = useAuth();

  if(user?.maquinas === false) {
    return <Navigate to="/" replace />
  }

  return (
    <div>
      <h1>Report Premio</h1>
    </div>
  )
}