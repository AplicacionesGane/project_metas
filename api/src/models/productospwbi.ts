import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import { powerBi } from '../connections/powerbi';
import { Ventaxhoras } from './ventahoras';

export class Productos extends Model<InferAttributes<Productos>, InferCreationAttributes<Productos>> {
  declare CODIGO: string;
  declare NOMBRE: string;
  declare TIPOJUEGO: string;
  declare VERSION: string;
  declare CATEGORIACOMERCIAL: string;
  declare IVA: number;
  declare EXPLOTACION: number;
}

Productos.init({
  CODIGO: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true, },
  NOMBRE: { type: DataTypes.STRING(60), allowNull: true, },
  TIPOJUEGO: { type: DataTypes.STRING(60), allowNull: true, },
  VERSION: { type: DataTypes.STRING(20), allowNull: true, },
  CATEGORIACOMERCIAL: { type: DataTypes.STRING(40), allowNull: true, },
  IVA: { type: DataTypes.DECIMAL(5, 2).UNSIGNED, allowNull: true, defaultValue: 0.00, },
  EXPLOTACION: { type: DataTypes.DECIMAL(5, 2).UNSIGNED, allowNull: true, defaultValue: 0.00, },
}, {
  sequelize: powerBi,
  tableName: 'PRODUCTOS',
  timestamps: false,
});
