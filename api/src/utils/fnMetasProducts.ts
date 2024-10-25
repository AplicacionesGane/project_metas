import { calcularPorcentaje, calcularPorcentajeSinLimite } from './funtionsReutilizables'
import { ProductsJamundi, ProductsYumbo } from '../types/interfaces'

function parsearInfoArrayMultired(data: ProductsYumbo) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data.ASTRO,
    aspiracionDia: data.PROMEDIO_DIARIO_ASTRO,
    porcentaje: calcularPorcentaje(data.ASTRO, data.PROMEDIO_DIARIO_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data.ASTRO, data.PROMEDIO_DIARIO_ASTRO)
  }
  const CHANCE = {
    id: 2,
    producto: 'Chance',
    ventaActual: data.CHANCE,
    aspiracionDia: data.PROMEDIO_DIARIO_CHANCE,
    porcentaje: calcularPorcentaje(data.CHANCE, data.PROMEDIO_DIARIO_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.CHANCE, data.PROMEDIO_DIARIO_CHANCE)
  }
  const CHANCE_MILLONARIO = {
    id: 3,
    producto: 'Chance Millonario',
    ventaActual: data.CHANCE_MILLONARIO,
    aspiracionDia: data.PROMEDIO_DIARIO_CHMILL,
    porcentaje: calcularPorcentaje(data.CHANCE_MILLONARIO, data.PROMEDIO_DIARIO_CHMILL),
    porcentaje2: calcularPorcentajeSinLimite(data.CHANCE_MILLONARIO, data.PROMEDIO_DIARIO_CHMILL)
  }
  const DOBLECHANCE = {
    id: 4,
    producto: 'Doble Chance',
    ventaActual: data.DOBLECHANCE,
    aspiracionDia: data.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data.DOBLECHANCE, data.PROMEDIO_DIARIO_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.DOBLECHANCE, data.PROMEDIO_DIARIO_DOBLECHANCE)
  }
  const PAGAMAS = {
    id: 5,
    producto: 'Paga Más',
    ventaActual: data.PAGAMAS,
    aspiracionDia: data.PROMEDIO_DIARIO_PAGAMAS,
    porcentaje: calcularPorcentaje(data.PAGAMAS, data.PROMEDIO_DIARIO_PAGAMAS),
    porcentaje2: calcularPorcentajeSinLimite(data.PAGAMAS, data.PROMEDIO_DIARIO_PAGAMAS)
  }
  const BETPLAY = {
    id: 6,
    producto: 'Betplay',
    ventaActual: data.BETPLAY,
    aspiracionDia: data.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: calcularPorcentaje(data.BETPLAY, data.PROMEDIO_DIARIO_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data.BETPLAY, data.PROMEDIO_DIARIO_BETPLAY)
  }
  const PAGATODO = {
    id: 7,
    producto: 'Paga Todo',
    ventaActual: data.PAGATODO,
    aspiracionDia: data.PROMEDIO_DIARIO_PAGATODO,
    porcentaje: calcularPorcentaje(data.PAGATODO, data.PROMEDIO_DIARIO_PAGATODO),
    porcentaje2: calcularPorcentajeSinLimite(data.PAGATODO, data.PROMEDIO_DIARIO_PAGATODO)
  }
  const RECARGAS = {
    id: 8,
    producto: 'Recargas',
    ventaActual: data.RECARGAS,
    aspiracionDia: data.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: calcularPorcentaje(data.RECARGAS, data.PROMEDIO_DIARIO_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data.RECARGAS, data.PROMEDIO_DIARIO_RECARGAS)
  }
  const GANE5 = {
    id: 9,
    producto: 'Gane 5',
    ventaActual: data.GANE5,
    aspiracionDia: data.PROMEDIO_DIARIO_GANE5,
    porcentaje: calcularPorcentaje(data.GANE5, data.PROMEDIO_DIARIO_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data.GANE5, data.PROMEDIO_DIARIO_GANE5)
  }
  const PATA_MILLONARIA = {
    id: 10,
    producto: 'Pata Millonaria',
    ventaActual: data.PATA_MILLONARIA,
    aspiracionDia: data.PROMEDIO_DIARIO_PATAMI,
    porcentaje: calcularPorcentaje(data.PATA_MILLONARIA, data.PROMEDIO_DIARIO_PATAMI),
    porcentaje2: calcularPorcentajeSinLimite(data.PATA_MILLONARIA, data.PROMEDIO_DIARIO_PATAMI)
  }
  const LOTERIA_VIRTUAL = {
    id: 11,
    producto: 'Lotería Virtual',
    ventaActual: data.LOTERIA_VIRTUAL,
    aspiracionDia: data.PROMEDIO_DIARIO_LV,
    porcentaje: calcularPorcentaje(data.LOTERIA_VIRTUAL, data.PROMEDIO_DIARIO_LV),
    porcentaje2: calcularPorcentajeSinLimite(data.LOTERIA_VIRTUAL, data.PROMEDIO_DIARIO_LV)
  }
  const LOTERIA_FISICA = {
    id: 12,
    producto: 'Lotería Física',
    ventaActual: data.LOTERIA_FISICA,
    aspiracionDia: data.PROMEDIO_DIARIO_LF,
    porcentaje: calcularPorcentaje(data.LOTERIA_FISICA, data.PROMEDIO_DIARIO_LF),
    porcentaje2: calcularPorcentajeSinLimite(data.LOTERIA_FISICA, data.PROMEDIO_DIARIO_LF)
  }
  const RASPE_LISTO = {
    id: 13,
    producto: 'Raspe y Listo',
    ventaActual: data.PROMO2,
    aspiracionDia: data.META_PROMO2,
    porcentaje: calcularPorcentaje(data.PROMO2, data.META_PROMO2),
    porcentaje2: calcularPorcentajeSinLimite(data.PROMO2, data.META_PROMO2)
  }
  const BALOTO = {
    id: 14,
    producto: 'Baloto',
    ventaActual: data.SOAT,
    aspiracionDia: data.PROMEDIO_DIARIO_SOAT,
    porcentaje: calcularPorcentaje(data.SOAT, data.PROMEDIO_DIARIO_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data.SOAT, data.PROMEDIO_DIARIO_SOAT)
  }
  const GIROS = {
    id: 15,
    producto: 'Giros',
    ventaActual: data.GIROS,
    aspiracionDia: data.PROMEDIO_DIARIO_GIROS,
    porcentaje: calcularPorcentaje(data.GIROS, data.PROMEDIO_DIARIO_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data.GIROS, data.PROMEDIO_DIARIO_GIROS)
  }
  const RECAUDOS = {
    id: 16,
    producto: 'Recaudos',
    ventaActual: data.RECAUDOS,
    aspiracionDia: data.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: calcularPorcentaje(data.RECAUDOS, data.PROMEDIO_DIARIO_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data.RECAUDOS, data.PROMEDIO_DIARIO_RECAUDOS)
  }

  let ventaActualAzarCal = 0;
  let aspiracionDiaAzarCal = 0;
  ventaActualAzarCal = data.CHANCE + data.PAGAMAS + data.PAGATODO + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO;
  aspiracionDiaAzarCal = data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_PAGAMAS + data.PROMEDIO_DIARIO_PAGATODO + data.PROMEDIO_DIARIO_GANE5 + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL;

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  return [ASTRO, CHANCE, CHANCE_MILLONARIO, DOBLECHANCE, PAGAMAS, BETPLAY, PAGATODO, RECARGAS, GANE5, PATA_MILLONARIA, LOTERIA_VIRTUAL, LOTERIA_FISICA, RASPE_LISTO, BALOTO, GIROS, RECAUDOS, JUEGOS_AZAR]
}

function parsearInfoArrayServired(data: ProductsJamundi) {
  const CHANCE = {
    id: 1,
    producto: 'Chance',
    ventaActual: data.CHANCE,
    aspiracionDia: data.PROMEDIO_DIARIO_CHANCE,
    porcentaje: calcularPorcentaje(data.CHANCE, data.PROMEDIO_DIARIO_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.CHANCE, data.PROMEDIO_DIARIO_CHANCE)
  }
  const PATA_MILLONARIA = {
    id: 10,
    producto: 'Pata Millonaria',
    ventaActual: data.PATA_MILLONARIA,
    aspiracionDia: data.PROMEDIO_DIARIO_PATAMI,
    porcentaje: calcularPorcentaje(data.PATA_MILLONARIA, data.PROMEDIO_DIARIO_PATAMI),
    porcentaje2: calcularPorcentajeSinLimite(data.PATA_MILLONARIA, data.PROMEDIO_DIARIO_PATAMI)
  }
  const GANE5 = {
    id: 3,
    producto: 'Gane 5',
    ventaActual: data.GANE5,
    aspiracionDia: data.PROMEDIO_DIARIO_GANE5,
    porcentaje: calcularPorcentaje(data.GANE5, data.PROMEDIO_DIARIO_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data.GANE5, data.PROMEDIO_DIARIO_GANE5)
  }
  const PAGATODO_JAMUNDI = {
    id: 4,
    producto: 'Paga Todo Jamundi',
    ventaActual: data.PAGATODO_JAMUNDI,
    aspiracionDia: data.PROMEDIO_DIARIO_PGTJAMUNDI,
    porcentaje: calcularPorcentaje(data.PAGATODO_JAMUNDI, data.PROMEDIO_DIARIO_PGTJAMUNDI),
    porcentaje2: calcularPorcentajeSinLimite(data.PAGATODO_JAMUNDI, data.PROMEDIO_DIARIO_PGTJAMUNDI)
  }
  const CHOLADITO = {
    id: 5,
    producto: 'Choladito',
    ventaActual: data.CHOLADITO,
    aspiracionDia: data.PROMEDIO_DIARIO_CHOLADITO,
    porcentaje: calcularPorcentaje(data.CHOLADITO, data.PROMEDIO_DIARIO_CHOLADITO),
    porcentaje2: calcularPorcentajeSinLimite(data.CHOLADITO, data.PROMEDIO_DIARIO_CHOLADITO)
  }
  const DOBLECHANCE = {
    id: 6,
    producto: 'Doble Chance',
    ventaActual: data.DOBLECHANCE,
    aspiracionDia: data.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data.DOBLECHANCE, data.PROMEDIO_DIARIO_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.DOBLECHANCE, data.PROMEDIO_DIARIO_DOBLECHANCE)
  }
  const CHANCE_MILLONARIO = {
    id: 7,
    producto: 'Chance Millonario',
    ventaActual: data.CHANCE_MILLONARIO,
    aspiracionDia: data.PROMEDIO_DIARIO_CHMILL,
    porcentaje: calcularPorcentaje(data.CHANCE_MILLONARIO, data.PROMEDIO_DIARIO_CHMILL),
    porcentaje2: calcularPorcentajeSinLimite(data.CHANCE_MILLONARIO, data.PROMEDIO_DIARIO_CHMILL)
  }
  const ASTRO = {
    id: 8,
    producto: 'Astro',
    ventaActual: data.ASTRO,
    aspiracionDia: data.PROMEDIO_DIARIO_ASTRO,
    porcentaje: calcularPorcentaje(data.ASTRO, data.PROMEDIO_DIARIO_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data.ASTRO, data.PROMEDIO_DIARIO_ASTRO)
  }
  const LOTERIA_VIRTUAL = {
    id: 9,
    producto: 'Lotería Virtual',
    ventaActual: data.LOTERIA_VIRTUAL,
    aspiracionDia: data.PROMEDIO_DIARIO_LV,
    porcentaje: calcularPorcentaje(data.LOTERIA_VIRTUAL, data.PROMEDIO_DIARIO_LV),
    porcentaje2: calcularPorcentajeSinLimite(data.LOTERIA_VIRTUAL, data.PROMEDIO_DIARIO_LV)
  }
  const LOTERIA_FISICA = {
    id: 10,
    producto: 'Lotería Física',
    ventaActual: data.LOTERIA_FISICA,
    aspiracionDia: data.PROMEDIO_DIARIO_LF,
    porcentaje: calcularPorcentaje(data.LOTERIA_FISICA, data.PROMEDIO_DIARIO_LF),
    porcentaje2: calcularPorcentajeSinLimite(data.LOTERIA_FISICA, data.PROMEDIO_DIARIO_LF)
  }
  const BETPLAY = {
    id: 11,
    producto: 'Betplay',
    ventaActual: data.BETPLAY,
    aspiracionDia: data.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: calcularPorcentaje(data.BETPLAY, data.PROMEDIO_DIARIO_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data.BETPLAY, data.PROMEDIO_DIARIO_BETPLAY)
  }
  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data.GIROS,
    aspiracionDia: data.PROMEDIO_DIARIO_GIROS,
    porcentaje: calcularPorcentaje(data.GIROS, data.PROMEDIO_DIARIO_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data.GIROS, data.PROMEDIO_DIARIO_GIROS)
  }
  const BALOTO = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data.SOAT,
    aspiracionDia: data.PROMEDIO_DIARIO_SOAT,
    porcentaje: calcularPorcentaje(data.SOAT, data.PROMEDIO_DIARIO_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data.SOAT, data.PROMEDIO_DIARIO_SOAT)
  }
  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data.RECAUDOS,
    aspiracionDia: data.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: calcularPorcentaje(data.RECAUDOS, data.PROMEDIO_DIARIO_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data.RECAUDOS, data.PROMEDIO_DIARIO_RECAUDOS)
  }
  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data.RECARGAS,
    aspiracionDia: data.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: calcularPorcentaje(data.RECARGAS, data.PROMEDIO_DIARIO_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data.RECARGAS, data.PROMEDIO_DIARIO_RECARGAS)
  }
  const PROMO1 = {
    id: 16,
    producto: 'Promo 1',
    ventaActual: data.PROMO1,
    aspiracionDia: data.META_PROMO1,
    porcentaje: calcularPorcentaje(data.PROMO1, data.META_PROMO1),
    porcentaje2: calcularPorcentajeSinLimite(data.PROMO1, data.META_PROMO1)
  }

  let ventaActualAzarCal = 0; 
  let aspiracionDiaAzarCal = 0;

  ventaActualAzarCal = data.CHANCE + data.CHOLADITO + data.PAGATODO_JAMUNDI + data.GANE5 + data.DOBLECHANCE + data.CHANCE_MILLONARIO;

  aspiracionDiaAzarCal = data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_CHOLADITO + data.PROMEDIO_DIARIO_PGTJAMUNDI + data.PROMEDIO_DIARIO_GANE5 + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL;

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  const PROMO2 = {
    id: 18,
    producto: 'Promo 2',
    ventaActual: data.PROMO2,
    aspiracionDia: data.META_PROMO2,
    porcentaje: calcularPorcentaje(data.PROMO2, data.META_PROMO2),
    porcentaje2: calcularPorcentajeSinLimite(data.PROMO2, data.META_PROMO2)
  }

  return[CHANCE, BALOTO, PATA_MILLONARIA, GANE5, PAGATODO_JAMUNDI, CHOLADITO, DOBLECHANCE, CHANCE_MILLONARIO, ASTRO, LOTERIA_VIRTUAL, LOTERIA_FISICA, BETPLAY, GIROS, RECAUDOS, RECARGAS, PROMO1, PROMO2, JUEGOS_AZAR]
}

const PRM = 'PROMEDIO_DIARIO_'
const Servired = [
  'CHANCE', 'GANE5', 'PAGATODO_JAMUNDI', 'CHOLADITO', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'PATA_MILLONARIA',
  'ASTRO', 'LOTERIA_FISICA', 'LOTERIA_VIRTUAL', 'BETPLAY', 'GIROS', 'SOAT', 'RECAUDOS', 'RECARGAS', 'PROMO1', 'PROMO2',

  'MT_CHANCE', 'MT_GANE5', 'MT_PAGATODO_JAMUNDI', 'MT_CHOLADITO', 'MT_DOBLECHANCE', 'MT_CHANCE_MILLONARIO', 'MT_PATA_MILLONARIA',
  'MT_ASTRO', 'MT_LOTERIA_FISICA', 'MT_LOTERIA_VIRTUAL', 'MT_BETPLAY', 'MT_GIROS', 'MT_SOAT', 'MT_RECAUDOS', 'MT_RECARGAS', 'META_PROMO1', 'META_PROMO2',

  `${PRM}SOAT`, `${PRM}CHANCE`, `${PRM}GANE5`, `${PRM}PGTJAMUNDI`,
  `${PRM}CHOLADITO`, `${PRM}DOBLECHANCE`, `${PRM}CHMILL`, `${PRM}ASTRO`, `${PRM}PATAMI`,
  `${PRM}LV`, `${PRM}LF`, `${PRM}BETPLAY`, `${PRM}GIROS`, `${PRM}RECAUDOS`, `${PRM}RECARGAS`
]
const Multired = [
  'ASTRO', 'CHANCE', 'CHANCE_MILLONARIO', 'DOBLECHANCE', 'PAGAMAS', 'BETPLAY', 'PAGATODO', 'RECARGAS', 'GANE5',
  'PATA_MILLONARIA', 'LOTERIA_VIRTUAL', 'LOTERIA_FISICA', 'PROMO2', 'SOAT', 'GIROS', 'RECAUDOS',

  'MT_CHANCE', 'MT_PAGAMAS', 'MT_PAGATODO', 'MT_GANE5', 'MT_PATA_MILLONARIA', 'MT_DOBLECHANCE',
  'MT_CHANCE_MILLONARIO', 'MT_ASTRO', 'MT_LOTERIA_FISICA', 'MT_LOTERIA_VIRTUAL', 'MT_BETPLAY',
  'MT_GIROS', 'MT_SOAT', 'MT_RECAUDOS', 'MT_RECARGAS', 'META_PROMO2',

  `${PRM}CHANCE`, `${PRM}ASTRO`, `${PRM}PAGAMAS`, `${PRM}PAGATODO`, `${PRM}GANE5`, `${PRM}PATAMI`,
  `${PRM}DOBLECHANCE`, `${PRM}CHMILL`, `${PRM}LF`, `${PRM}BETPLAY`, `${PRM}GIROS`, `${PRM}SOAT`,
  `${PRM}RECAUDOS`, `${PRM}RECARGAS`, `${PRM}LV`,
]

export function ReturnCompanyAtributesMetProducts(zona: string) {
  if (zona === '39627') return Multired
  if (zona === '39628') return Servired
}

export function ReturnArrayMetProducts (zona: string, metas: ProductsYumbo | ProductsJamundi) {
  if (zona === '39627') {
    return parsearInfoArrayMultired(metas as ProductsYumbo)
  } else if(zona === '39628') {
    return parsearInfoArrayServired(metas as ProductsJamundi)
  }
  throw new Error('Error al parsear la informacion')
}