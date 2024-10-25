import { Model, DataTypes, Optional } from "sequelize";
import { MetasConn } from "../connections/metasConn";

type BoletasAttributes = {
  FECHA: Date;
  SUCURSAL: number;
  USUARIO: string;
  NOMBRES: string;
  SUGERIDO1: string;
  CUMPLIMIENTO: number;
  CUMPLIMIENTO2: number;
  CUMPLIMIENTO3: number;
  CUMPLIMIENTO4: number;
  CUMPLIMIENTO5: number;
  CUMPLIMIENTO6: number;
  CUMPLIMIENTO7: number;
  CUMPLIMIENTO8: number;
  CUMPLIMIENTO9: number;
}

type BoletasCreationAttributes = Optional<BoletasAttributes, 'FECHA'>

class Boletas extends Model<BoletasAttributes, BoletasCreationAttributes> {
  declare FECHA: Date;
  declare SUCURSAL: number;
  declare USUARIO: string;
  declare NOMBRES: string;
  declare SUGERIDO1: string;
  declare CUMPLIMIENTO: number;
  declare CUMPLIMIENTO2: number;
  declare CUMPLIMIENTO3: number;
  declare CUMPLIMIENTO4: number;
  declare CUMPLIMIENTO5: number;
  declare CUMPLIMIENTO6: number;
  declare CUMPLIMIENTO7: number;
  declare CUMPLIMIENTO8: number;
  declare CUMPLIMIENTO9: number;
}

Boletas.init({
  FECHA: { type: DataTypes.DATE, allowNull: false },
  SUCURSAL: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  USUARIO: { type: DataTypes.STRING, allowNull: false },
  NOMBRES: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO1: { type: DataTypes.STRING, allowNull: false },
  CUMPLIMIENTO: { type: DataTypes.NUMBER, allowNull: false },
  CUMPLIMIENTO2: { type: DataTypes.NUMBER, allowNull: false },
  CUMPLIMIENTO3: { type: DataTypes.NUMBER, allowNull: false },
  CUMPLIMIENTO4: { type: DataTypes.NUMBER, allowNull: false },
  CUMPLIMIENTO5: { type: DataTypes.NUMBER, allowNull: false },
  CUMPLIMIENTO6: { type: DataTypes.NUMBER, allowNull: false },
  CUMPLIMIENTO7: { type: DataTypes.NUMBER, allowNull: false },
  CUMPLIMIENTO8: { type: DataTypes.NUMBER, allowNull: false },
  CUMPLIMIENTO9: { type: DataTypes.NUMBER, allowNull: false }
}, {
  sequelize: MetasConn,
  modelName: 'boletas',
  tableName: 'CUMPLIMIENTO_SUGERIDOS_VEND',
  timestamps: false
})

export { Boletas }