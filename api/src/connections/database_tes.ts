import { DB_TEST_DATABASE, DB_TEST_HOST, DB_TEST_PASSWORD, DB_TEST_PORT, DB_TEST_USER } from '../config/envTesDatabase';
import { Sequelize } from 'sequelize';

const Test70Conn = new Sequelize(DB_TEST_DATABASE, DB_TEST_USER, DB_TEST_PASSWORD, {
  host: DB_TEST_HOST,
  port: DB_TEST_PORT,
  dialect: 'mysql',
  timezone: '-05:00',
})

export { Test70Conn }