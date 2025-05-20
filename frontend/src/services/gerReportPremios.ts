import type { ReportPremios } from "@/types/DataInterface";
import axios from "axios";

export const getReportPremios = async () => {
  try {
    const response = await axios.get<ReportPremios[]>('/reportPremios')

    if (response.status !== 200) {
      throw new Error('Error al obtener los reportes')
    }

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
  