import { MetasConn } from '../connections/metasConn'
import { Model, DataTypes, Optional } from 'sequelize'

type SugAttributes = {
  FECHA: Date
  ZONA: number
  CCOSTO: number
  SUCURSAL: number
  VTA_CHANCE: number
  VTA_PAGAMAS: number
  VTA_PAGATODO: number
  VTA_GANE5: number
  VTA_PATA_MILLONARIA: number
  VTA_DOBLECHANCE: number
  VTA_CHANCE_MILLONARIO: number
  META_SUG1: number
  META_SUG2: number
  META_SUG3: number
  META_SUG4: number
  META_SUG5: number
  META_SUG6: number
  META_SUG7: number
  META_SUG8: number
  USUARIO: string
  SUGERIDO1: string
  SUGERIDO2: string
  SUGERIDO3: string
  SUGERIDO4: string
  SUGERIDO5: string
  SUGERIDO6: string
  SUGERIDO7: string
  SUGERIDO8: string
  VERSION1: string
  VERSION2: string
  NOMBRES: string
}

type SugCreationAttributes = Optional<SugAttributes, 'FECHA'>

class SugModel extends Model<SugCreationAttributes, SugAttributes> {
  declare FECHA: Date
  declare ZONA: number
  declare CCOSTO: number
  declare SUCURSAL: number
  declare VTA_CHANCE: number
  declare VTA_PAGAMAS: number
  declare VTA_PAGATODO: number
  declare VTA_GANE5: number
  declare VTA_PATA_MILLONARIA: number
  declare VTA_DOBLECHANCE: number
  declare VTA_CHANCE_MILLONARIO: number
  declare META_SUG1: number
  declare META_SUG2: number
  declare META_SUG3: number
  declare META_SUG4: number
  declare META_SUG5: number
  declare META_SUG6: number
  declare META_SUG7: number
  declare META_SUG8: number
  declare USUARIO: string
  declare SUGERIDO1: string
  declare SUGERIDO2: string
  declare SUGERIDO3: string
  declare SUGERIDO4: string
  declare SUGERIDO5: string
  declare SUGERIDO6: string
  declare SUGERIDO7: string
  declare SUGERIDO8: string
  declare VERSION1: string
  declare VERSION2: string
  declare NOMBRES: string
}

SugModel.init({
  FECHA: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
  ZONA: { type: DataTypes.NUMBER, allowNull: false },
  CCOSTO: { type: DataTypes.NUMBER, allowNull: false },
  SUCURSAL: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  VTA_CHANCE: { type: DataTypes.NUMBER, allowNull: false },
  VTA_PAGAMAS: { type: DataTypes.NUMBER, allowNull: false },
  VTA_PAGATODO: { type: DataTypes.NUMBER, allowNull: false },
  VTA_GANE5: { type: DataTypes.NUMBER, allowNull: false },
  VTA_PATA_MILLONARIA: { type: DataTypes.NUMBER, allowNull: false },
  VTA_DOBLECHANCE: { type: DataTypes.NUMBER, allowNull: false },
  VTA_CHANCE_MILLONARIO: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG1: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG2: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG3: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG4: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG5: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG6: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG7: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG8: { type: DataTypes.NUMBER, allowNull: false },
  USUARIO: { type: DataTypes.STRING, allowNull: true },
  SUGERIDO1: { type: DataTypes.STRING, allowNull: true },
  SUGERIDO2: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO3: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO4: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO5: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO6: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO7: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO8: { type: DataTypes.STRING, allowNull: false },
  VERSION1: { type: DataTypes.STRING, allowNull: false },
  VERSION2: { type: DataTypes.STRING, allowNull: false },
  NOMBRES: { type: DataTypes.STRING, allowNull: true }
},{
  sequelize: MetasConn,
  modelName: 'sug_vend',
  tableName: 'SUGERIDOS_VENDEDOR',
  timestamps: false
})

export { SugModel }