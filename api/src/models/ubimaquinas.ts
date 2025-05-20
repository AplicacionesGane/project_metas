import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { powerBi } from '../connections/powerbi';

class Ubimaquinas extends Model<InferAttributes<Ubimaquinas>, InferCreationAttributes<Ubimaquinas>> {
  declare SUCURSAL: string;
  declare MAQUINA: string;
  declare DESCRIPCION: string;
  declare VERSION: string;
}

Ubimaquinas.init({
  SUCURSAL: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  MAQUINA: { type: DataTypes.STRING(20), allowNull: false, primaryKey: true },
  DESCRIPCION: { type: DataTypes.STRING(50), allowNull: true },
  VERSION: { type: DataTypes.STRING(20), allowNull: true }
}, {
  sequelize: powerBi,
  tableName: 'UBICACIONMAQUINAS',
  timestamps: false
})

export { Ubimaquinas }
