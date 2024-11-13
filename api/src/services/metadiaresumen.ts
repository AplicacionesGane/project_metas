import { MetasProducts } from '../models/metasproducts.model'
import { fn } from 'sequelize'

const opcMultired: (keyof MetasProducts)[] = ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'PROMO1']
const opcServired: (keyof MetasProducts)[] = ['CHANCE', 'CHOLADITO', 'PAGATODO_JAMUNDI', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'PROMO1']

export async function getVentaActualProductos(sucursal: number, zona: number) {
  try {
    await MetasProducts.sync()
    const ventaProductos = await MetasProducts.findOne({
      attributes: zona === 39627 ? opcMultired : opcServired,
      where: {
        SUCURSAL: sucursal,
        FECHA: fn('CURDATE'),
        ZONA: zona
      }
    })

    if (!ventaProductos) {
      throw new Error('No se encontraron metas para el código y zona proporcionados')
    }

    let sumaVentaActual = 0

    if (zona === 39627) {
      sumaVentaActual = (
        ventaProductos?.CHANCE + ventaProductos?.PAGAMAS +
        ventaProductos?.PAGATODO + ventaProductos?.GANE5 +
        ventaProductos?.PATA_MILLONARIA + ventaProductos?.DOBLECHANCE +
        ventaProductos?.CHANCE_MILLONARIO + ventaProductos?.PROMO1
      )
    } else if (zona === 39628) {
      sumaVentaActual = (
        ventaProductos?.CHANCE + ventaProductos?.CHOLADITO +
        ventaProductos?.PAGATODO_JAMUNDI + ventaProductos?.GANE5 +
        ventaProductos?.PATA_MILLONARIA + ventaProductos?.DOBLECHANCE +
        ventaProductos?.CHANCE_MILLONARIO + ventaProductos?.PROMO1
      )
    } else {
      throw new Error('Zona no encontrada en venta actual productos')
    }

    return sumaVentaActual
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener las metas')
  }
}

const opcMultiredPro: (keyof MetasProducts)[] = ['PROMEDIO_DIARIO_CHANCE', 'PROMEDIO_DIARIO_PAGAMAS', 'PROMEDIO_DIARIO_PAGATODO', 'PROMEDIO_DIARIO_GANE5', 'PROMEDIO_DIARIO_PATAMI', 'PROMEDIO_DIARIO_DOBLECHANCE', 'PROMEDIO_DIARIO_CHMILL', 'META_PROMO1']

const opcServiredPro: (keyof MetasProducts)[] = ['PROMEDIO_DIARIO_CHANCE', 'PROMEDIO_DIARIO_CHOLADITO', 'PROMEDIO_DIARIO_PGTJAMUNDI', 'PROMEDIO_DIARIO_GANE5', 'PROMEDIO_DIARIO_PATAMI', 'PROMEDIO_DIARIO_DOBLECHANCE', 'PROMEDIO_DIARIO_CHMILL', 'META_PROMO1']

export async function getAspiracionDiaActual(sucursal: number, zona: number) {
  try {
    const promediosDiarios = await MetasProducts.findOne({
      attributes: zona === 39627 ? opcMultiredPro : opcServiredPro,
      where: {
        SUCURSAL: sucursal,
        FECHA: fn('CURDATE'),
        ZONA: zona
      }
    })

    if (!promediosDiarios) {
      throw new Error('No se encontraron metas para el código y zona proporcionados')
    }

    let aspiracionDia = 0

    if (zona === 39627) {
      aspiracionDia = (
        promediosDiarios?.PROMEDIO_DIARIO_CHANCE + promediosDiarios?.PROMEDIO_DIARIO_PAGAMAS +
        promediosDiarios?.PROMEDIO_DIARIO_PAGATODO + promediosDiarios?.PROMEDIO_DIARIO_GANE5 +
        promediosDiarios?.PROMEDIO_DIARIO_PATAMI + promediosDiarios?.PROMEDIO_DIARIO_DOBLECHANCE +
        promediosDiarios?.PROMEDIO_DIARIO_CHMILL + promediosDiarios?.META_PROMO1
      )
    } else if (zona === 39628) {
      aspiracionDia = (
        promediosDiarios?.PROMEDIO_DIARIO_CHANCE + promediosDiarios?.PROMEDIO_DIARIO_CHOLADITO +
        promediosDiarios?.PROMEDIO_DIARIO_PGTJAMUNDI + promediosDiarios?.PROMEDIO_DIARIO_GANE5 +
        promediosDiarios?.PROMEDIO_DIARIO_PATAMI + promediosDiarios?.PROMEDIO_DIARIO_DOBLECHANCE +
        promediosDiarios?.PROMEDIO_DIARIO_CHMILL + promediosDiarios?.META_PROMO1
      )
    } else {
      throw new Error('Zona no encontrada en aspiracion día actual')
    }

    return aspiracionDia

  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener las metas')
  }
}