export interface MetasProducto {
  id: number
  producto: string
  ventaActual: number
  aspiracionDia: number
  porcentaje: string
  porcentaje2: string
}

export interface MetasProps {
  codigo: number
  zona: string
}

const productMetaMap = {
  CHANCE: 500,
  PAGAMAS: 750,
  CHOLADITO: 650,
  PAGATODO: 1600,
  DOBLECHANCE: 2000,
  PATA_MILLONARIA: 3000,
  CHANCE_MILLONARIO: 5000,
  KASH: 500,
  GANE5: 1000
}

export type Product = keyof typeof productMetaMap

export interface Sugeridos {
  SUGERIDO1: Product
  VTA_SUGERIDO: number
  META_SUG1: number
}
