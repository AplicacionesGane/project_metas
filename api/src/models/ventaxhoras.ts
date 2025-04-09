import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { powerBi } from '../connections/powerbi';

class Ventaxhoras extends Model<InferAttributes<Ventaxhoras>, InferCreationAttributes<Ventaxhoras>> {
  declare FECHA: string;
  declare HORA: number;
  declare FECHACREATE?: Date;
  declare FECHAUPDATE?: Date;
  declare ZONA: string;
  declare CCOSTO: string;
  declare SUCURSAL: string;
  declare LOGIN: string;
  declare TIPOPRODUCTO: string;
  declare PRODUCTO_CODIGO: string;
  declare SERVICIO_CODIGO: string;
  declare ASPIRACIONH: number;
  declare VTAH: number;
  declare VTAPH: number;
  declare NROFORMULARIOS: number;
  declare VERSION: string;
}

Ventaxhoras.init(
  {
    FECHA: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
    HORA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    FECHACREATE: { type: DataTypes.DATE, allowNull: true },
    FECHAUPDATE: { type: DataTypes.DATE, allowNull: true },
    ZONA: { type: DataTypes.STRING(10), allowNull: false },
    CCOSTO: { type: DataTypes.STRING(10), allowNull: false },
    SUCURSAL: { type: DataTypes.STRING(10), allowNull: false },
    LOGIN: { type: DataTypes.STRING(20), allowNull: true },
    TIPOPRODUCTO: { type: DataTypes.STRING(10), allowNull: false },
    PRODUCTO_CODIGO: { type: DataTypes.STRING(10), allowNull: true },
    SERVICIO_CODIGO: { type: DataTypes.STRING(10), allowNull: true },
    ASPIRACIONH: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    VTAH: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    VTAPH: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    NROFORMULARIOS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    VERSION: { type: DataTypes.STRING(20), allowNull: true },
  },
  {
    sequelize: powerBi,
    tableName: 'VENTAHORAPRODUCTOS',
    timestamps: false,
  }
);