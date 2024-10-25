import { MetasConn } from "../connections/metasConn";
import { Model, DataTypes } from "sequelize";

class InfoPdv extends Model { }

InfoPdv.init({
  ZONA: { type: DataTypes.NUMBER, allowNull: false },
  VERSION: { type: DataTypes.STRING, allowNull: true },
  TIPO: { type: DataTypes.STRING, allowNull: true },
  SUPERVISOR: { type: DataTypes.STRING, allowNull: true },
  NOMBRE: { type: DataTypes.STRING, allowNull: true },
  LONGITUD: { type: DataTypes.STRING, allowNull: true },
  LOGIN: { type: DataTypes.STRING, allowNull: true },
  LATITUD: { type: DataTypes.STRING, allowNull: true },
  FECHASYS: { type: DataTypes.DATE, allowNull: false },
  FECHA_ACCESO: { type: DataTypes.DATE, allowNull: false },
  ESTADO: { type: DataTypes.STRING, allowNull: true },
  DISPOSITIVO: { type: DataTypes.STRING, allowNull: true },
  DIRECCION: { type: DataTypes.STRING, allowNull: true },
  CODIGO: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  CCOSTO: { type: DataTypes.NUMBER, allowNull: false },
  CATEGORIA: { type: DataTypes.STRING, allowNull: true },
  BARRIO: { type: DataTypes.STRING, allowNull: true },
  ARRENDATARIO: { type: DataTypes.STRING, allowNull: true }
}, {
  sequelize: MetasConn,
  modelName: 'info_pdv',
  tableName: 'INFORMACION_PUNTOSVENTA',
  timestamps: false
})

export { InfoPdv }