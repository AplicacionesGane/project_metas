import { Sequelize } from 'sequelize';

const TEST_70_DB_USER = process.env.DB_TEST_70_USER!
const TEST_70_DB_PASSWORD = process.env.DB_TEST_70_PASSWORD!
const TEST_70_DB_HOST = process.env.DB_TEST_70_HOST!
const TEST_70_DB_PORT = process.env.DB_TEST_70_PORT!
const TEST_70_DB_DATABASE = process.env.DB_TEST_70_DATABASE!


const Test70Conn = new Sequelize(TEST_70_DB_DATABASE, TEST_70_DB_USER, TEST_70_DB_PASSWORD, {
  host: TEST_70_DB_HOST,
  port: parseInt(TEST_70_DB_PORT),
  dialect: 'mysql',
  timezone: '-05:00',
})

export { Test70Conn }