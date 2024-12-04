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
  DOCUMENTO: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  NOMBRES: { type: DataTypes.STRING, allowNull: false },
  GRPVTAS_CODIGO: { type: DataTypes.STRING, allowNull: false },
  CARGO: { type: DataTypes.STRING, allowNull: false },
  VERSION: { type: DataTypes.STRING, allowNull: false },
  NOMBRECARGO: { type: DataTypes.STRING, allowNull: false },
  CCOSTO: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize: powerBi,
  tableName: 'VENDEDORES',
  timestamps: false
})

export { User }