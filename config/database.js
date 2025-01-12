// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    username: 'postgres',
    password: 'nestor',
    database: 'job',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, // Puerto por defecto
  });

module.exports = sequelize;
