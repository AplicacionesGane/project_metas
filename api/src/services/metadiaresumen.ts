import { MetasProducts } from '../models/metasproducts.model'
import { fn } from 'sequelize'

export async function getVentaActualProductos(codigo: string, sucursal: string) {
  try {
    await MetasProducts.sync()
    const ventaProductos = await MetasProducts.findOne({
      attributes: ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'PROMO1'],
      where: { 
        SUCURSAL: codigo, 
        FECHA: fn('CURDATE'),
        ZONA: sucursal
      }
    })

    if (!ventaProductos) {
      throw new Error('No se encontraron metas para el código y zona proporcionados')
    } 
    
    const sumaVentaActual = (
      ventaProductos?.CHANCE + ventaProductos?.PAGAMAS +
      ventaProductos?.PAGATODO + ventaProductos?.GANE5 +
      ventaProductos?.PATA_MILLONARIA + ventaProductos?.DOBLECHANCE +
      ventaProductos?.CHANCE_MILLONARIO + ventaProductos?.PROMO1
    )

    return sumaVentaActual
  } catch (error) {
    throw new Error('Error al obtener las metas')
  }
}

export async function getAspiracionDiaActual(codigo:string, sucursal: string) {
  try {
    const promediosDiarios = await MetasProducts.findOne({
      attributes: ['PROMEDIO_DIARIO_CHANCE', 'PROMEDIO_DIARIO_PAGAMAS', 'PROMEDIO_DIARIO_PAGATODO', 'PROMEDIO_DIARIO_GANE5', 'PROMEDIO_DIARIO_PATAMI', 'PROMEDIO_DIARIO_DOBLECHANCE', 'PROMEDIO_DIARIO_CHMILL', 'META_PROMO1'],
      where: { 
        SUCURSAL: codigo, 
        FECHA: fn('CURDATE'),
        ZONA: sucursal 
      }
    })

    if (!promediosDiarios) {
      throw new Error('No se encontraron metas para el código y zona proporcionados')
    }

    const aspiracionDia = (
      promediosDiarios?.PROMEDIO_DIARIO_CHANCE + promediosDiarios?.PROMEDIO_DIARIO_PAGAMAS +
      promediosDiarios?.PROMEDIO_DIARIO_PAGATODO + promediosDiarios?.PROMEDIO_DIARIO_GANE5 +
      promediosDiarios?.PROMEDIO_DIARIO_PATAMI + promediosDiarios?.PROMEDIO_DIARIO_DOBLECHANCE +
      promediosDiarios?.PROMEDIO_DIARIO_CHMILL + promediosDiarios?.META_PROMO1
    )

    return aspiracionDia
  
  } catch (error) {
    throw new Error('Error al obtener las metas')
  }
}