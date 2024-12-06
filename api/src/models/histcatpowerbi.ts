import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize'
import { powerBi } from '../connections/powerbi'

class HistorialCategoria extends Model<InferAttributes<HistorialCategoria>, InferCreationAttributes<HistorialCategoria>> {
  declare ANHO: number
  declare MES: number
  declare SUCURSAL: number
  declare CATEGORIA: string
  declare VERSION: string
}

HistorialCategoria.init({
  ANHO: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  MES: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  SUCURSAL: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  CATEGORIA: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  VERSION: { type: DataTypes.STRING(20), allowNull: true }
}, {
  sequelize: powerBi,
  tableName: 'HIST_CATEGORIAS',
  timestamps: false
})

export { HistorialCategoria }