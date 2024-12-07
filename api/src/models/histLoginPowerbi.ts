import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import { powerBi } from '../connections/powerbi';

export class HistLogin extends Model<InferAttributes<HistLogin>, InferCreationAttributes<HistLogin>> {
  declare USERNAME: string;
  declare SUCURSAL: number;
  declare FECHA_LOGIN?: Date;
}

HistLogin.init({
  USERNAME: { type: DataTypes.STRING(15), allowNull: false, primaryKey: true },
  SUCURSAL: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  FECHA_LOGIN: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW }
}, {
  sequelize: powerBi,
  tableName: 'HIST_USUARIOS_LOGUEADOS',
  timestamps: false
});