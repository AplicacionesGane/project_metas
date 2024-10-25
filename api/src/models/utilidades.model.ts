import { Model, DataTypes } from "sequelize";
import { MetasConn } from "../connections/metasConn";

type UtilidadesAttributes = {
  cc_asesor: string
  comision: number
}

class Utilidades extends Model<UtilidadesAttributes> {
  public cc_asesor!: string
  public comision!: number
}

Utilidades.init({
  cc_asesor: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  comision: { type: DataTypes.NUMBER, allowNull: false }
}, {
  sequelize: MetasConn,
  modelName: 'utilidades',
  tableName: 'comision_asesor',
  timestamps: false
})

export { Utilidades }