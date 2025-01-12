const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pais = require('./pais');

const Ciudad = sequelize.define('Ciudad', {
  ID_ciudad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ID_pais: {
    type: DataTypes.INTEGER,
    references: {
      model: Pais,
      key: 'ID_pais'
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Ciudad;
