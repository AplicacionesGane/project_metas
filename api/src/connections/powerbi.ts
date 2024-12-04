import { Sequelize } from 'sequelize'

const POWERBI_DB_USER = process.env.DB_POWERBI_USER!
const POWERBI_DB_PASSWORD = process.env.DB_POWERBI_PASSWORD!
const POWERBI_DB_HOST = process.env.DB_POWERBI_HOST!
const POWERBI_DB_PORT = process.env.DB_POWERBI_PORT!
const POWERBI_DB_DATABASE = process.env.DB_POWERBI_DATABASE!

const powerBi = new Sequelize(POWERBI_DB_DATABASE, POWERBI_DB_USER, POWERBI_DB_PASSWORD, {
  host: POWERBI_DB_HOST,
  port: parseInt(POWERBI_DB_PORT),
  dialect: 'mysql',
  timezone: '-05:00',
  logging: false
})

export { powerBi }