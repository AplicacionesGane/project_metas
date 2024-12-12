import { Model, DataTypes } from "sequelize";
import { powerBi } from "../connections/powerbi";

type UtilidadesAttributes = {
  FECHA: Date;
  DOCUMENTO: string;
  CONCEPTO: string;
  REFERENCIA: string;
  VERSION: string;
}

class Utilidades extends Model<UtilidadesAttributes> {
  public cc_asesor!: string
  public comision!: number
}

Utilidades.init({
  FECHA: { type: DataTypes.DATE, allowNull: false },
  DOCUMENTO: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  CONCEPTO: { type: DataTypes.STRING, allowNull: false },
  REFERENCIA: { type: DataTypes.STRING, allowNull: false },
  VERSION: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize: powerBi,
  modelName: 'utilidades',
  tableName: 'COMISIONES',
  timestamps: false
})

export { Utilidades }