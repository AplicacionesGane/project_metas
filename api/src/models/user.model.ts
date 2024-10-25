import { Model, DataTypes } from "sequelize";
import { MetasConn } from "../connections/metasConn";

class User extends Model { }

User.init({
  codigo: { type: DataTypes.NUMBER, allowNull: false, unique: true },
  username: { type: DataTypes.STRING, allowNull: false, primaryKey: true, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  estado: { type: DataTypes.STRING, allowNull: false },
  nombres: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize: MetasConn,
  modelName: 'user',
  tableName: 'user',
  timestamps: false
})

export { User }