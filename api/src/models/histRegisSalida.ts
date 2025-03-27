import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import { powerBi } from '../connections/powerbi';

export class HistRegisSalida extends Model<InferAttributes<HistRegisSalida>, InferCreationAttributes<HistRegisSalida>> {
  declare TIPO: string;
  declare USERNAME: string;
  declare SUCURSAL: number;
  declare FECHA_LOGOUT: Date;
  declare BLOQREG: number;
  declare FECHACREATE?: Date;
  declare FECHAUPDATE?: Date;
  declare VERSION?: number;
}

HistRegisSalida.init({
  TIPO: { type: DataTypes.ENUM, values:['SALIDA', 'SALIDAINT', 'SALIDATEMP'], allowNull: false, primaryKey: true },
  USERNAME: { type: DataTypes.STRING(15), allowNull: false, primaryKey: true },
  SUCURSAL: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  FECHA_LOGOUT: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
  BLOQREG: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  FECHACREATE: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
  FECHAUPDATE: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
  VERSION: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 }
}, {
  sequelize: powerBi,
  tableName: 'HIST_REGISTROSALIDAS',
  timestamps: false
});