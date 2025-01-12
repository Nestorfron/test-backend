const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Entidad = sequelize.define('Entidad', {
  ID_entidad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_entidad: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  }
});

module.exports = Entidad;
