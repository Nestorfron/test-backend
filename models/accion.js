const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Accion = sequelize.define('Accion', {
  ID_accion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_accion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion_accion: {
    type: DataTypes.TEXT
  }
});

module.exports = Accion;
