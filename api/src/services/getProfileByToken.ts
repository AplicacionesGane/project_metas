import { HistRegisSalida } from "../models/histRegisSalida"
import { Sucursal } from "../models/sucursalespw"
import { Categoria } from "../models/vCatgSucuPowebi"
import { User } from "../models/vendedorespw"
import { BaseError } from "../utils/baseError"

export const getProfileByToken = async (sucursal: number, username: string) => {
  try {
    const cedula = username.split('CV')[1]

    const Vendedor = await User.findOne({
      attributes: ['DOCUMENTO', 'NOMBRES', 'NOMBRECARGO'],
      where: { DOCUMENTO: cedula }
    })
    const SucursalInfo = await Sucursal.findOne({
      attributes: ['ZONA', 'CODIGO', 'NOMBRE', 'DIRECCION', 'SUPERVISOR'],
      where: { CODIGO: sucursal }
    })

    const CategoriaInfo = await Categoria.findOne({
      attributes: ['CATEGORIZACION'],
      where: { SUCURSAL_CODIGO: sucursal }
    })

    const StateSalida = await HistRegisSalida.findOne({
      where: { SUCURSAL: sucursal, USERNAME: cedula }
    })


    if (!Vendedor || !SucursalInfo) {
      throw new BaseError('Usuario no encontrado ó Sucursal no encontrada', 404)
    }

    console.log(StateSalida);

    const InfoGeneral = {
      user: Vendedor,
      sucursal: SucursalInfo,
      infCategoria: CategoriaInfo,
      stateSalida: StateSalida ? false : true
    }

    return InfoGeneral
  } catch (error) {
    throw new BaseError("Error al obtener el perfil en services 'get profile'", 500)
  }
}