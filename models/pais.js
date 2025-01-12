const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pais = sequelize.define('Pais', {
  ID_pais: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Pais;
