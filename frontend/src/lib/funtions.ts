export const formatPrice = (number: number) => `$ ${Intl.NumberFormat("es-CO").format(number).toString()}`

export const colorBackground = (porcentaje: number = 0, variant: 'light' | 'dark' | 'default' = 'default'): string => {
  if (porcentaje === undefined) return 'bg-gray-50';

  const thresholds = [
    { max: 40, light: 'bg-red-50', dark: 'bg-red-500', default: 'bg-red-200' },
    { max: 95, light: 'bg-yellow-50', dark: 'bg-yellow-400', default: 'bg-yellow-100' },
    { max: 99, light: 'bg-blue-50', dark: 'bg-blue-500', default: 'bg-blue-200' },
    { max: 100, light: 'bg-green-50', dark: 'bg-green-400', default: 'bg-green-200' }
  ];

  const threshold = thresholds.find(t => porcentaje <= t.max);
  return threshold ? threshold[variant === 'light' ? 'light' : variant === 'dark' ? 'dark' : 'default'] : 'bg-gray-600';
};

export const ObtenerMes = () => {
  const fecha = new Date()
  return fecha.toLocaleString('es-ES', { month: 'long' })
}