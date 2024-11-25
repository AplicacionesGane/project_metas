import { MetasProducto } from '../types/Metas'

export const colorBackground = (porcentaje: number) => {
  if (porcentaje === undefined) return 'bg-gray-50'
  if (porcentaje < 40) return 'bg-red-50'
  if (porcentaje >= 40 && porcentaje < 90) return 'bg-yellow-50'
  if (porcentaje >= 90 && porcentaje < 99) return 'bg-blue-50'
  if (porcentaje > 99) return 'bg-green-50'
}

export const getColorVariant = (percentage: number): "default" | "neutral" | "warning" | "error" | "cyan" | "success" | undefined => {
  if (percentage < 40) {
    return 'error'
  } else if (percentage >= 40 && percentage < 90) {
    return 'warning'
  } else if (percentage >= 90 && percentage < 99) {
    return 'default'
  } else if (percentage >= 99) {
    return 'success'
  }
  return undefined
}

export const formatPrice = (number: number) => `$ ${Intl.NumberFormat("es-CO").format(number).toString()}`

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
