import { MetasConn } from '../connections/metasConn'
import { Model, DataTypes } from 'sequelize'

class HistModel extends Model { }

HistModel.init({
  ANHO: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  MES: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  SUCURSAL: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  CATEGORIA: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  VERSION: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize: MetasConn,
  modelName: 'hist_cat',
  tableName: 'HIST_CATEGORIAS',
  timestamps: false
})

export { HistModel }