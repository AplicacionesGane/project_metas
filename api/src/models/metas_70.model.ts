import { Test70Conn } from '../connections/test_92';
import { DataTypes, Model, Optional } from 'sequelize';

interface HorasAttributes {
  id?: number;
  sucursal: number;
  zona: number;
  fecha: string;
  hora: string;
  chance: number;
  gane5: number;
  astro: number;
  createdAt?: Date;
  updatedAt?: Date;
}

type HorasCreationAttributes = Optional<HorasAttributes, 'id' | 'updatedAt' | 'createdAt'>;

class Horas extends Model<HorasAttributes, HorasCreationAttributes> {
  declare id: number;
  declare sucursal: number;
  declare zona: number;
  declare fecha: string;
  declare hora: string;
  declare chance: number;
  declare gane5: number;
  declare astro: number;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Horas.init({
  sucursal: { type: DataTypes.INTEGER, allowNull: false },
  zona: { type: DataTypes.INTEGER, allowNull: false },
  fecha: { type: DataTypes.DATEONLY, allowNull: false },
  hora: { type: DataTypes.TIME, allowNull: false },
  chance: { type: DataTypes.INTEGER, allowNull: false },
  gane5: { type: DataTypes.INTEGER, allowNull: false },
  astro: { type: DataTypes.INTEGER, allowNull: false },

}, {
  sequelize: Test70Conn,
  tableName: 'Meta'
})

export { Horas, HorasAttributes } 