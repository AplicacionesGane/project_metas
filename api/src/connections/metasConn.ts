import { Sequelize } from 'sequelize'

const METAS_DB_USER = process.env.DB_METAS_USER!
const METAS_DB_PASSWORD = process.env.DB_METAS_PASSWORD!
const METAS_DB_HOST = process.env.DB_METAS_HOST!
const METAS_DB_PORT = process.env.DB_METAS_PORT!
const METAS_DB_DATABASE = process.env.DB_METAS_DATABASE!


const MetasConn = new Sequelize(METAS_DB_DATABASE, METAS_DB_USER, METAS_DB_PASSWORD, {
  host: METAS_DB_HOST,
  port: parseInt(METAS_DB_PORT),
  dialect: 'mysql',
  logging: false,
  timezone: '-05:00',
})

export { MetasConn }