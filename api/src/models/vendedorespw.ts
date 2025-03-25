import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { powerBi } from '../connections/powerbi';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare DOCUMENTO: string
  declare NOMBRES: string
  declare GRPVTAS_CODIGO: string
  declare CARGO: string
  declare VERSION: string
  declare NOMBRECARGO: string
  declare CCOSTO: string
}

User.init({
  DOCUMENTO: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: null,
    primaryKey: true
  },
  NOMBRES: {
    type: DataTypes.STRING(60),
    allowNull: false,
    defaultValue: null
  },
  GRPVTAS_CODIGO: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: null
  },
  CARGO: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: null
  },
  VERSION: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: null
  },
  NOMBRECARGO: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: null
  },
  CCOSTO: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: null,
  }
}, {
  sequelize: powerBi,
  tableName: 'VENDEDORES',
  timestamps: false
})

export { User }