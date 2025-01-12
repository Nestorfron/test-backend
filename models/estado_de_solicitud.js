const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estado_Solicitud = sequelize.define('Estado_Solicitud', {
  ID_estado_solicitud: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  }
});

module.exports = Estado_Solicitud;
