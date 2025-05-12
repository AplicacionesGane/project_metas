export interface MetasProducto {
  id: number
  producto: string
  ventaActual: number
  aspiracionDia: number
  porcentaje: string
  porcentaje2: string
}

export type MetasProI = MetasProducto[]

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
  ID:           number;
  PRODUCTO:     string;
  VTA_SUGERIDO: number;
  META_VALOR:   number;
  ESTADO:       string;
}

export interface ComisionesI {
  FECHA: string;
  DOCUMENTO: string;
  CONCEPTO: string;
  REFERENCIA: string;
  VERSION: null;
}

export interface MetaXhoraData {
  ID: number;
  HORA: string;
  VTA_HORA: number;
  META_HORA: number;
  DIF: number;
}

export interface MetaXHoraResponse {
  parsedResults: MetaXhoraData[];
  metaNextHour: MetaXhoraData[];
  acomulado: number;
}