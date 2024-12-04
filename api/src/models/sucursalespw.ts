import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { powerBi } from '../connections/powerbi';

class Sucursal extends Model<InferAttributes<Sucursal>, InferCreationAttributes<Sucursal>> {
  declare ZONA: string
  declare CCOSTO: string
  declare CODIGO: string
  declare NOMBRE: string
  declare DIRECCION: string
  declare TIPO: string
  declare DISPOSITIVO: string
  declare SUPERVISOR: string
  declare CANAL: string
  declare CATEGORIA: string
  declare HORA_ENTRADA: string
  declare HORA_SALIDA: string
  declare HORA_ENTRADA_FES: string
  declare HORA_SALIDA_FES: string
  declare SUBZONA: string
  declare CELULA: string
  declare HORAS_ORDINARIAS: number
  declare HORAS_FESTIVAS: number
  declare ESTADO: string
}

Sucursal.init({
  ZONA: { type: DataTypes.STRING(10), allowNull: false },
  CCOSTO: { type: DataTypes.STRING(10), allowNull: false },
  CODIGO: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  NOMBRE: { type: DataTypes.STRING(40), allowNull: false },
  DIRECCION: { type: DataTypes.STRING(40), allowNull: false },
  TIPO: { type: DataTypes.STRING(20), allowNull: false },
  DISPOSITIVO: { type: DataTypes.STRING(20), allowNull: false },
  SUPERVISOR: { type: DataTypes.STRING(20), allowNull: false },
  CANAL: { type: DataTypes.STRING(30), allowNull: false },
  CATEGORIA: { type: DataTypes.STRING(30), allowNull: false },
  HORA_ENTRADA: { type: DataTypes.TIME, allowNull: false },
  HORA_SALIDA: { type: DataTypes.TIME, allowNull: false },
  HORA_ENTRADA_FES: { type: DataTypes.TIME, allowNull: false },
  HORA_SALIDA_FES: { type: DataTypes.TIME, allowNull: false },
  SUBZONA: { type: DataTypes.STRING(30), allowNull: false },
  CELULA: { type: DataTypes.STRING(30), allowNull: false },
  HORAS_ORDINARIAS: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 8 },
  HORAS_FESTIVAS: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 6 },
  ESTADO: { type: DataTypes.STRING, allowNull: false, defaultValue: 'A'}
}, {
  sequelize: powerBi,
  tableName: 'SUCURSALES',
  timestamps: false
})

export { Sucursal }