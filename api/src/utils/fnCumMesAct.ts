import { calcularPorcentaje, calcularPorcentajeSinLimite } from "./funtionsReutilizables"
import { MesActMultired, MesActServired } from "../types/mesActi"

const MetasMesActMultired = [
  "EJE_CHANCE",
  "VTM_CHANCE",
  "EJE_PAGAMAS",
  "VTM_PAGAMAS",
  "EJE_PAGATODO",
  "VTM_PAGATODO",
  "EJE_GANE5",
  "VTM_GANE5",
  "EJE_PATA_MILLONARIA",
  "VTM_PATA_MILLONARIA",
  "EJE_DOBLECHANCE",
  "VTM_DOBLECHANCE",
  "EJE_CHANCE_MILLONARIO",
  "VTM_CHANCE_MILLONARIO",
  "EJE_ASTRO",
  "VTM_ASTRO",
  "EJE_LOTERIA_FISICA",
  "VTM_LOTERIA_FISICA",
  "EJE_LOTERIA_VIRTUAL",
  "VTM_LOTERIA_VIRTUAL",
  "EJE_BETPLAY",
  "VTM_BETPLAY",
  "EJE_GIROS",
  "VTM_GIROS",
  "EJE_SOAT",
  "VTM_SOAT",
  "EJE_RECAUDOS",
  "VTM_RECAUDOS",
  "EJE_RECARGAS",
  "VTM_RECARGAS",
  "EJE_RASPE",
  "VTM_RASPE"
] 

const MetasMesActServired = [
    "EJE_CHANCE",
    "VTM_CHANCE",
    "EJE_CHOLADITO",
    "VTM_CHOLADITO",
    "EJE_PAGATODO_JAMUNDI",
    "VTM_PAGATODO_JAMUNDI",
    "EJE_GANE5",
    "VTM_GANE5",
    "EJE_PATA_MILLONARIA",
    "VTM_PATA_MILLONARIA",
    "EJE_DOBLECHANCE",
    "VTM_DOBLECHANCE",
    "EJE_CHANCE_MILLONARIO",
    "VTM_CHANCE_MILLONARIO",
    "EJE_ASTRO",
    "VTM_ASTRO",
    "EJE_LOTERIA_FISICA",
    "VTM_LOTERIA_FISICA",
    "EJE_LOTERIA_VIRTUAL",
    "VTM_LOTERIA_VIRTUAL",
    "EJE_BETPLAY",
    "VTM_BETPLAY",
    "EJE_GIROS",
    "VTM_GIROS",
    "EJE_SOAT",
    "VTM_SOAT",
    "EJE_RECAUDOS",
    "VTM_RECAUDOS",
    "EJE_RECARGAS",
    "VTM_RECARGAS",
    "EJE_RASPE",
    "VTM_RASPE"
] 

function parsearInfoArrayMultired(data: MesActMultired){
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data.EJE_ASTRO,
    aspiracionDia: data.VTM_ASTRO,
    porcentaje: calcularPorcentaje(data.EJE_ASTRO, data.VTM_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_ASTRO, data.VTM_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 Y 3 Cif',
    ventaActual: data.EJE_CHANCE,
    aspiracionDia: data.VTM_CHANCE,
    porcentaje: calcularPorcentaje(data.EJE_CHANCE, data.VTM_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_CHANCE, data.VTM_CHANCE)
  }

  const PAGAMAS = {
    id: 3,
    producto: 'Pagamas',
    ventaActual: data.EJE_PAGAMAS,
    aspiracionDia: data.VTM_PAGAMAS,
    porcentaje: calcularPorcentaje(data.EJE_PAGAMAS, data.VTM_PAGAMAS),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_PAGAMAS, data.VTM_PAGAMAS)
  }

  const PAGATODO = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data.EJE_PAGATODO,
    aspiracionDia: data.VTM_PAGATODO,
    porcentaje: calcularPorcentaje(data.EJE_PAGATODO, data.VTM_PAGATODO),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_PAGATODO, data.VTM_PAGATODO)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data.EJE_GANE5,
    aspiracionDia: data.VTM_GANE5,
    porcentaje: calcularPorcentaje(data.EJE_GANE5, data.VTM_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_GANE5, data.VTM_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data.EJE_PATA_MILLONARIA,
    aspiracionDia: data.VTM_PATA_MILLONARIA,
    porcentaje: calcularPorcentaje(data.EJE_PATA_MILLONARIA, data.VTM_PATA_MILLONARIA),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_PATA_MILLONARIA, data.VTM_PATA_MILLONARIA)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data.EJE_DOBLECHANCE,
    aspiracionDia: data.VTM_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data.EJE_DOBLECHANCE, data.VTM_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_DOBLECHANCE, data.VTM_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data.EJE_CHANCE_MILLONARIO,
    aspiracionDia: data.VTM_CHANCE_MILLONARIO,
    porcentaje: calcularPorcentaje(data.EJE_CHANCE_MILLONARIO, data.VTM_CHANCE_MILLONARIO),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_CHANCE_MILLONARIO, data.VTM_CHANCE_MILLONARIO)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data.EJE_LOTERIA_FISICA,
    aspiracionDia: data.VTM_LOTERIA_FISICA,
    porcentaje: calcularPorcentaje(data.EJE_LOTERIA_FISICA, data.VTM_LOTERIA_FISICA),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_LOTERIA_FISICA, data.VTM_LOTERIA_FISICA)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data.EJE_LOTERIA_VIRTUAL,
    aspiracionDia: data.VTM_LOTERIA_VIRTUAL,
    porcentaje: calcularPorcentaje(data.EJE_LOTERIA_VIRTUAL, data.VTM_LOTERIA_VIRTUAL),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_LOTERIA_VIRTUAL, data.VTM_LOTERIA_VIRTUAL)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data.EJE_BETPLAY,
    aspiracionDia: data.VTM_BETPLAY,
    porcentaje: calcularPorcentaje(data.EJE_BETPLAY, data.VTM_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_BETPLAY, data.VTM_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data.EJE_GIROS,
    aspiracionDia: data.VTM_GIROS,
    porcentaje: calcularPorcentaje(data.EJE_GIROS, data.VTM_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_GIROS, data.VTM_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data.EJE_SOAT,
    aspiracionDia: data.VTM_SOAT,
    porcentaje: calcularPorcentaje(data.EJE_SOAT, data.VTM_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_SOAT, data.VTM_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data.EJE_RECAUDOS,
    aspiracionDia: data.VTM_RECAUDOS,
    porcentaje: calcularPorcentaje(data.EJE_RECAUDOS, data.VTM_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_RECAUDOS, data.VTM_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data.EJE_RECARGAS,
    aspiracionDia: data.VTM_RECARGAS,
    porcentaje: calcularPorcentaje(data.EJE_RECARGAS, data.VTM_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_RECARGAS, data.VTM_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data.EJE_RASPE,
    aspiracionDia: data.VTM_RASPE,
    porcentaje: calcularPorcentaje(data.EJE_RASPE, data.VTM_RASPE),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_RASPE, data.VTM_RASPE)
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0
  ventaActualAzarCal =
    data.EJE_CHANCE +
    data.EJE_PAGAMAS +
    data.EJE_PAGATODO +
    data.EJE_GANE5 +
    data.EJE_PATA_MILLONARIA +
    data.EJE_DOBLECHANCE +
    data.EJE_CHANCE_MILLONARIO

  aspiracionDiaAzarCal =
    data.VTM_CHANCE +
    data.VTM_PAGAMAS +
    data.VTM_PAGATODO +
    data.VTM_GANE5 +
    data.VTM_PATA_MILLONARIA +
    data.VTM_DOBLECHANCE +
    data.VTM_CHANCE_MILLONARIO

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  return [
    ASTRO,
    CHANCE,
    PAGAMAS,
    PAGATODO,
    GANE5,
    PATA_MILLONARIA,
    DOBLECHANCE,
    CHANCE_MILLONARIO,
    LOTERIA_FISICA,
    LOTERIA_VIRTUAL,
    BETPLAY,
    GIROS,
    SOAT,
    RECAUDOS,
    RECARGAS,
    PROMO2,
    JUEGOS_AZAR
  ]
}

function parsearInfoArrayServired(data: MesActServired){
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data.EJE_ASTRO,
    aspiracionDia: data.VTM_ASTRO,
    porcentaje: calcularPorcentaje(data.EJE_ASTRO, data.VTM_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_ASTRO, data.VTM_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 Y 3 Cif',
    ventaActual: data.EJE_CHANCE,
    aspiracionDia: data.VTM_CHANCE,
    porcentaje: calcularPorcentaje(data.EJE_CHANCE, data.VTM_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_CHANCE, data.VTM_CHANCE)
  }

  const CHOLADITO = {
    id: 3,
    producto: 'Choladito',
    ventaActual: data.EJE_CHOLADITO,
    aspiracionDia: data.VTM_CHOLADITO,
    porcentaje: calcularPorcentaje(data.EJE_CHOLADITO, data.VTM_CHOLADITO),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_CHOLADITO, data.VTM_CHOLADITO)
  }

  const PAGATODO_JAMUNDI = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data.EJE_PAGATODO_JAMUNDI,
    aspiracionDia: data.VTM_PAGATODO_JAMUNDI,
    porcentaje: calcularPorcentaje(data.EJE_PAGATODO_JAMUNDI, data.VTM_PAGATODO_JAMUNDI),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_PAGATODO_JAMUNDI, data.VTM_PAGATODO_JAMUNDI)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data.EJE_GANE5,
    aspiracionDia: data.VTM_GANE5,
    porcentaje: calcularPorcentaje(data.EJE_GANE5, data.VTM_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_GANE5, data.VTM_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data.EJE_PATA_MILLONARIA,
    aspiracionDia: data.VTM_PATA_MILLONARIA,
    porcentaje: calcularPorcentaje(data.EJE_PATA_MILLONARIA, data.VTM_PATA_MILLONARIA),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_PATA_MILLONARIA, data.VTM_PATA_MILLONARIA)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data.EJE_DOBLECHANCE,
    aspiracionDia: data.VTM_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data.EJE_DOBLECHANCE, data.VTM_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_DOBLECHANCE, data.VTM_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data.EJE_CHANCE_MILLONARIO,
    aspiracionDia: data.VTM_CHANCE_MILLONARIO,
    porcentaje: calcularPorcentaje(data.EJE_CHANCE_MILLONARIO, data.VTM_CHANCE_MILLONARIO),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_CHANCE_MILLONARIO, data.VTM_CHANCE_MILLONARIO)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data.EJE_LOTERIA_FISICA,
    aspiracionDia: data.VTM_LOTERIA_FISICA,
    porcentaje: calcularPorcentaje(data.EJE_LOTERIA_FISICA, data.VTM_LOTERIA_FISICA),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_LOTERIA_FISICA, data.VTM_LOTERIA_FISICA)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data.EJE_LOTERIA_VIRTUAL,
    aspiracionDia: data.VTM_LOTERIA_VIRTUAL,
    porcentaje: calcularPorcentaje(data.EJE_LOTERIA_VIRTUAL, data.VTM_LOTERIA_VIRTUAL),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_LOTERIA_VIRTUAL, data.VTM_LOTERIA_VIRTUAL)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data.EJE_BETPLAY,
    aspiracionDia: data.VTM_BETPLAY,
    porcentaje: calcularPorcentaje(data.EJE_BETPLAY, data.VTM_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_BETPLAY, data.VTM_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data.EJE_GIROS,
    aspiracionDia: data.VTM_GIROS,
    porcentaje: calcularPorcentaje(data.EJE_GIROS, data.VTM_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_GIROS, data.VTM_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data.EJE_SOAT,
    aspiracionDia: data.VTM_SOAT,
    porcentaje: calcularPorcentaje(data.EJE_SOAT, data.VTM_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_SOAT, data.VTM_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data.EJE_RECAUDOS,
    aspiracionDia: data.VTM_RECAUDOS,
    porcentaje: calcularPorcentaje(data.EJE_RECAUDOS, data.VTM_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_RECAUDOS, data.VTM_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data.EJE_RECARGAS,
    aspiracionDia: data.VTM_RECARGAS,
    porcentaje: calcularPorcentaje(data.EJE_RECARGAS, data.VTM_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_RECARGAS, data.VTM_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data.EJE_RASPE,
    aspiracionDia: data.VTM_RASPE,
    porcentaje: calcularPorcentaje(data.EJE_RASPE, data.VTM_RASPE),
    porcentaje2: calcularPorcentajeSinLimite(data.EJE_RASPE, data.VTM_RASPE)
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0

  ventaActualAzarCal =
    data.EJE_CHANCE +
    data.EJE_CHOLADITO +
    data.EJE_PAGATODO_JAMUNDI +
    data.EJE_GANE5 +
    data.EJE_PATA_MILLONARIA +
    data.EJE_DOBLECHANCE +
    data.EJE_CHANCE_MILLONARIO

  aspiracionDiaAzarCal =
    data.VTM_CHANCE +
    data.VTM_CHOLADITO +
    data.VTM_PAGATODO_JAMUNDI +
    data.VTM_GANE5 +
    data.VTM_PATA_MILLONARIA +
    data.VTM_DOBLECHANCE +
    data.VTM_CHANCE_MILLONARIO

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  return [
    ASTRO,
    CHANCE,
    CHOLADITO,
    PAGATODO_JAMUNDI,
    GANE5,
    PATA_MILLONARIA,
    DOBLECHANCE,
    CHANCE_MILLONARIO,
    LOTERIA_FISICA,
    LOTERIA_VIRTUAL,
    BETPLAY,
    GIROS,
    SOAT,
    RECAUDOS,
    RECARGAS,
    PROMO2,
    JUEGOS_AZAR
  ]
}


export function ReturnCompanyAtriCumMesActu(zona: string) {
  if (zona === '39627') return MetasMesActMultired
  if (zona === '39628') return MetasMesActServired
}

export function ReturArrayCumpMesActProducts (zona: string, metas: MesActMultired | MesActServired) {
  if (zona === '39627') {
    return parsearInfoArrayMultired(metas as MesActMultired)
  } else if(zona === '39628') {
    return parsearInfoArrayServired(metas as MesActServired)
  }
  throw new Error('Error al parsear la informacion')
}

