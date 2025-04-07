import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Test70Conn } from '../connections/database_tes';

class MetaxHora extends Model<InferAttributes<MetaxHora>, InferCreationAttributes<MetaxHora>> {
  declare id: number;
  declare fecha: string;
  declare sucursal: number;
  declare producto: string;
  declare hora6: number;
  declare hora7: number;
  declare hora8: number;
  declare hora9: number;
  declare hora10: number;
  declare hora11: number;
  declare hora12: number;
  declare hora13: number;
  declare hora14: number;
  declare hora15: number;
  declare hora16: number;
  declare hora17: number;
  declare hora18: number;
  declare hora19: number;
  declare hora20: number;
  declare hora21: number;
  declare hora22: number;
  declare hora23: number;
}

MetaxHora.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fecha: { type: DataTypes.DATEONLY, allowNull: false },
  sucursal: { type: DataTypes.INTEGER, allowNull: false },
  producto: { type: DataTypes.STRING(50), allowNull: false },
  hora6: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora7: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora8: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora9: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora10: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora11: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora12: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora13: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora14: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora15: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora16: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora17: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora18: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora19: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora20: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora21: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora22: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  hora23: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
}, {
  sequelize: Test70Conn,
  tableName: 'ventaxhoras',
  timestamps: false,
})

export { MetaxHora } 