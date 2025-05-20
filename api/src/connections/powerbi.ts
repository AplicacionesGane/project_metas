import { DB_POWERBI_DATABASE, DB_POWERBI_HOST, DB_POWERBI_PASSWORD, DB_POWERBI_PORT, DB_POWERBI_USER,  } from '../config/envPowerBi';
import { API_ENV } from '../config/enviroments';
import { Sequelize } from 'sequelize';

const powerBi = new Sequelize(DB_POWERBI_DATABASE, DB_POWERBI_USER, DB_POWERBI_PASSWORD, {
  host: DB_POWERBI_HOST,
  port: DB_POWERBI_PORT,
  dialect: 'mysql',
  timezone: '-05:00',
  logging: API_ENV === 'dev' ? console.log : false,
})

export { powerBi }