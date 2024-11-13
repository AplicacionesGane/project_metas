import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize'
import { MetasConn } from '../connections/metasConn'

class MetasProducts extends Model<InferAttributes<MetasProducts>, InferCreationAttributes<MetasProducts>>{
  declare FECHA: string
  declare CHANCE: number
  declare PAGAMAS: number
  declare PAGATODO: number
  declare GANE5: number
  declare PAGATODO_JAMUNDI: number
  declare CHOLADITO: number
  declare PATA_MILLONARIA: number
  declare DOBLECHANCE: number
  declare CHANCE_MILLONARIO: number
  declare ASTRO: number
  declare LOTERIA_FISICA: number
  declare LOTERIA_VIRTUAL: number
  declare BETPLAY: number
  declare GIROS: number
  declare SOAT: number
  declare RECAUDOS: number
  declare RECARGAS: number
  declare ZONA: number
  declare CCOSTO: number
  declare SUCURSAL: number
  declare MT_CHANCE: number
  declare PROMEDIO_DIARIO_CHANCE: number
  declare MT_PAGAMAS: number
  declare PROMEDIO_DIARIO_PAGAMAS: number
  declare MT_PAGATODO: number
  declare PROMEDIO_DIARIO_PAGATODO: number
  declare MT_GANE5: number
  declare PROMEDIO_DIARIO_GANE5: number
  declare MT_PAGATODO_JAMUNDI: number
  declare PROMEDIO_DIARIO_PGTJAMUNDI: number
  declare MT_CHOLADITO: number
  declare PROMEDIO_DIARIO_CHOLADITO: number
  declare MT_PATA_MILLONARIA: number
  declare PROMEDIO_DIARIO_PATAMI: number
  declare MT_DOBLECHANCE: number
  declare PROMEDIO_DIARIO_DOBLECHANCE: number
  declare MT_CHANCE_MILLONARIO: number
  declare PROMEDIO_DIARIO_CHMILL: number
  declare MT_ASTRO: number
  declare PROMEDIO_DIARIO_ASTRO: number
  declare MT_LOTERIA_FISICA: number
  declare PROMEDIO_DIARIO_LF: number
  declare MT_LOTERIA_VIRTUAL: number
  declare PROMEDIO_DIARIO_LV: number
  declare MT_BETPLAY: number
  declare PROMEDIO_DIARIO_BETPLAY: number
  declare MT_GIROS: number
  declare PROMEDIO_DIARIO_GIROS: number
  declare MT_SOAT: number
  declare PROMEDIO_DIARIO_SOAT: number
  declare MT_RECAUDOS: number
  declare PROMEDIO_DIARIO_RECAUDOS: number
  declare MT_RECARGAS: number
  declare PROMEDIO_DIARIO_RECARGAS: number
  declare PROMO1: number
  declare META_PROMO1: number
  declare PROMO2: number
  declare META_PROMO2: number
  declare VERSION: string
}

MetasProducts.init({
  FECHA: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
  CHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PAGAMAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PAGATODO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  GANE5: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PAGATODO_JAMUNDI: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  CHOLADITO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PATA_MILLONARIA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  DOBLECHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  CHANCE_MILLONARIO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  ASTRO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  LOTERIA_FISICA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  LOTERIA_VIRTUAL: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  BETPLAY: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  GIROS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  SOAT: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  RECAUDOS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  RECARGAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  ZONA: { type: DataTypes.INTEGER, allowNull: false },
  CCOSTO: { type: DataTypes.INTEGER, allowNull: false },
  SUCURSAL: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  MT_CHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_CHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_PAGAMAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_PAGAMAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_PAGATODO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_PAGATODO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_GANE5: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_GANE5: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_PAGATODO_JAMUNDI: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_PGTJAMUNDI: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_CHOLADITO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_CHOLADITO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_PATA_MILLONARIA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_PATAMI: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_DOBLECHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_DOBLECHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_CHANCE_MILLONARIO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_CHMILL: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_ASTRO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_ASTRO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_LOTERIA_FISICA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_LF: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_LOTERIA_VIRTUAL: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_LV: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_BETPLAY: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_BETPLAY: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_GIROS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_GIROS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_SOAT: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_SOAT: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_RECAUDOS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_RECAUDOS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_RECARGAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_RECARGAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMO1: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  META_PROMO1: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMO2: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  META_PROMO2: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  VERSION: { type: DataTypes.STRING, allowNull: true }
}, {
  sequelize: MetasConn,
  tableName: 'METASPRODUCTOS',
  timestamps: false
})

export { MetasProducts }