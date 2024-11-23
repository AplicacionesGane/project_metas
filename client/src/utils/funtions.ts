import { MetasProducto } from '../types/Metas'

export const determineProgressColor = (porcentaje: number) => {

  if (porcentaje === undefined) return 'bg-gray-100'
  if (porcentaje < 40) return 'bg-red-100'
  if (porcentaje >= 40 && porcentaje < 70) return 'bg-yellow-100'
  if (porcentaje >= 70 && porcentaje < 99) return 'bg-blue-100'
  if (porcentaje > 99) return 'bg-green-100'
}

export const ObtenerMes = () => {
  const fecha = new Date()
  return fecha.toLocaleString('es-ES', { month: 'long' })
}

export function sortData (data: MetasProducto[], isAscending: boolean): MetasProducto[] {
  return [...data].sort((a, b) => {
    // Siempre coloca el elemento con id 'especial' en primer lugar
    if (a.id === 17 || a.id === 18) return -1
    if (b.id === 17 || b.id === 18) return 1

    // Para todos los demás elementos, ordena por porcentaje
    return isAscending ? parseFloat(a.porcentaje) - parseFloat(b.porcentaje) : parseFloat(b.porcentaje) - parseFloat(a.porcentaje)
  })
}
