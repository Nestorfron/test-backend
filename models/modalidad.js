const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Modalidad = sequelize.define('Modalidad', {
  ID_modalidad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  }
});

module.exports = Modalidad;
