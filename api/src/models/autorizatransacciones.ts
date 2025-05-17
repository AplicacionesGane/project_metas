import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { powerBi } from '../connections/powerbi';

class AutorizaTransacciones extends Model<InferAttributes<AutorizaTransacciones>, InferCreationAttributes<AutorizaTransacciones>> {
  declare IDTRANSACCION: number;
  declare FECHA: Date;
  declare SUCURSAL: string;
  declare LOGINSOLICITUD: string;
  declare CONCEPTO: 'PREMIO' | 'NOMINA' | 'OTRO';
  declare VALOR: number;
  declare TERCERO: string;
  declare LOGINAUTORIZA: string;
  declare ESTADO: 'PENDIENTE' | 'RECHAZADO' | 'APROBADO';
  declare FECHACREATE?: Date;
  declare FECHAUPDATE?: Date;
  declare NOTA?: string;
  declare VERSION?: string;
}

AutorizaTransacciones.init({
  IDTRANSACCION: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  FECHA: { type: DataTypes.DATE, allowNull: false },
  SUCURSAL: { type: DataTypes.STRING(10), allowNull: false },
  LOGINSOLICITUD: { type: DataTypes.STRING(20), allowNull: false },
  CONCEPTO: { type: DataTypes.ENUM('PREMIO', 'NOMINA', 'OTRO'), allowNull: false },
  VALOR: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  TERCERO: { type: DataTypes.STRING(20), allowNull: false },
  LOGINAUTORIZA: { type: DataTypes.STRING(20), allowNull: false },
  ESTADO: { type: DataTypes.ENUM('PENDIENTE', 'RECHAZADO', 'APROBADO'), allowNull: false },
  FECHACREATE: { type: DataTypes.DATE, allowNull: true },
  FECHAUPDATE: { type: DataTypes.DATE, allowNull: true },
  NOTA: { type: DataTypes.STRING(50), allowNull: true },
  VERSION: { type: DataTypes.STRING(20), allowNull: true }
}, {
  sequelize: powerBi,
  tableName: 'AUTORIZATRANSACCIONES',
  timestamps: false
})