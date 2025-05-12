import { fn } from "sequelize"
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
      attributes: ['ZONA', 'CODIGO', 'NOMBRE', 'DIRECCION', 'SUPERVISOR', 'CATEGORIA'],
      where: { CODIGO: sucursal }
    })

    const CategoriaInfo = await Categoria.findOne({
      attributes: ['CATEGORIZACION'],
      where: { SUCURSAL_CODIGO: sucursal }
    })

    const StateSalida = await HistRegisSalida.findOne({
      where: { SUCURSAL: sucursal, USERNAME: cedula, FECHA_LOGOUT: fn('CURDATE') }
    })


    if (!Vendedor || !SucursalInfo) {
      throw new BaseError('Usuario no encontrado ó Sucursal no encontrada', 404)
    }

    const state = StateSalida ? StateSalida.BLOQREG === 1 ? false : false : true

    // TODO: 1. Este intenta traer la categoría primero de la vista 
    // TODO: 2. como segunda opción la table sucursal 
    // TODO: 3. donde ambos falle retorna null así el front mostrará una imagen x defecto
    const defineCategoria = CategoriaInfo?.CATEGORIZACION
      ?? SucursalInfo?.dataValues?.CATEGORIA
      ?? null;


    const InfoGeneral = {
      user: Vendedor,
      sucursal: {
        ZONA: SucursalInfo.dataValues.ZONA,
        CODIGO: SucursalInfo.dataValues.CODIGO,
        NOMBRE: SucursalInfo.dataValues.NOMBRE,
        DIRECCION: SucursalInfo.dataValues.DIRECCION,
        SUPERVISOR: SucursalInfo.dataValues.SUPERVISOR,
        CATEGORIA: defineCategoria
      },
      stateSalida: state
    }

    return InfoGeneral
  } catch (error) {
    throw new BaseError("Error al obtener el perfil en services 'get profile'", 500)
  }
}