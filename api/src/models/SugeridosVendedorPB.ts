import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { powerBi } from '../connections/powerbi';

export class SugeridosVendedorPB extends Model<InferAttributes<SugeridosVendedorPB>, InferCreationAttributes<SugeridosVendedorPB>> {
  declare ID: number;
  declare FECHA: Date;
  declare ZONA: string;
  declare CCOSTO: string;
  declare SUCURSAL: string;
  declare LOGIN: string;
  declare CATEGORIA: string;
  declare PRODUCTO: string;
  declare VTA_SUGERIDO: number;
  declare FRM_SUGERIDO: number;
  declare META_CANTIDAD: number;
  declare META_VALOR: number;
  declare ESTADO: 'INICIAL' | 'ENPROGRESO' | 'SUPERADO';
  declare VERSION: string;
}

SugeridosVendedorPB.init(
  {
    ID: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 100, primaryKey: true },
    FECHA: { type: DataTypes.DATEONLY, allowNull: false },
    ZONA: { type: DataTypes.STRING(10), allowNull: false },
    CCOSTO: { type: DataTypes.STRING(10), allowNull: false },
    SUCURSAL: { type: DataTypes.STRING(10), allowNull: false },
    LOGIN: { type: DataTypes.STRING(20), allowNull: true },
    CATEGORIA: { type: DataTypes.STRING(20), allowNull: true },
    PRODUCTO: { type: DataTypes.STRING(50), allowNull: true },
    VTA_SUGERIDO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    FRM_SUGERIDO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    META_CANTIDAD: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    META_VALOR: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    ESTADO: { type: DataTypes.ENUM, values: ['INICIAL', 'ENPROGRESO', 'SUPERADO'], defaultValue: null, allowNull: true },
    VERSION: { type: DataTypes.STRING(20), allowNull: true },
  },
  {
    sequelize: powerBi, // Connection instance
    tableName: 'SUGERIDOSVENDEDOR',
    timestamps: false, // Disable createdAt and updatedAt
  }
);