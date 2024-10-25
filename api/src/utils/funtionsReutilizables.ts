export function calcularPorcentaje(actual: number, metaDia: number) {
  const percentage = (actual * 100) / metaDia
  return Math.min(100, percentage).toFixed(2)
}

export function calcularPorcentajeSinLimite(actual: number, metaDia: number) {
  const percentage = (actual * 100) / metaDia
  return percentage.toFixed(2)
}