import { DataTypes, Model, Optional } from 'sequelize'
import { MetasConn } from '../connections/metasConn'

interface HistLoginAttributes {
  username: string
  sucursal: number
  fecha_login: Date
}

interface HistLoginCreationAttributes extends Optional<HistLoginAttributes, 'fecha_login'> { }

export class HistLogin extends Model<HistLoginAttributes, HistLoginCreationAttributes> implements HistLoginAttributes {
  public username!: string
  public sucursal!: number
  public fecha_login!: Date
}

HistLogin.init({
  username: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  sucursal: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  fecha_login: { type: DataTypes.DATE, allowNull: false, primaryKey: true, defaultValue: DataTypes.NOW }
}, {
  sequelize: MetasConn,
  tableName: 'HIST_USUARIOS_LOGUEADOS',
  timestamps: false
})