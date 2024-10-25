import { MetasProducto } from '../types/Metas'

export const determineProgressColor = (porcentaje: number) => {
  if (porcentaje <= 49.99) return 'red'
  if (porcentaje <= 94.99) return 'yellow'
  if (porcentaje <= 99.99) return 'sky'
  if (porcentaje >= 99.99) return 'green'
  return 'gray'
}

export const ObtenerMes = () => {
  const fecha = new Date()
  return fecha.toLocaleString('es-ES', { month: 'long' })
}

export function sortData (data: MetasProducto[], isAscending: boolean): MetasProducto[] {
  return [...data].sort((a, b) => {
    // Siempre coloca el elemento con id 'especial' en primer lugar
    if (a.id === 17) return -1
    if (b.id === 17) return 1

    // Para todos los demás elementos, ordena por porcentaje
    return isAscending ? parseFloat(a.porcentaje) - parseFloat(b.porcentaje) : parseFloat(b.porcentaje) - parseFloat(a.porcentaje)
  })
}
