import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { powerBi } from '../connections/powerbi'

class Categoria extends Model<InferAttributes<Categoria>, InferCreationAttributes<Categoria>> {
  declare SUCURSAL_CODIGO: string
  declare VENTA_ACOMULADA: number
  declare CATEGORIZACION: string
  declare CATEGORIZACION2: string
}

Categoria.init({
  SUCURSAL_CODIGO: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  VENTA_ACOMULADA: { type: DataTypes.DECIMAL(32, 0), allowNull: true },
  CATEGORIZACION: { type: DataTypes.STRING(10), allowNull: false },
  CATEGORIZACION2: { type: DataTypes.STRING(10), allowNull: false }
}, {
  sequelize: powerBi,
  tableName: 'V_CATEGORIA_SUCURSAL',
  timestamps: false
})

export { Categoria }