const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  ID_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo_electronico: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_ultimo_acceso: {
    type: DataTypes.DATE
  },
  telefono: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.TEXT
  },
  ID_ciudad: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Ciudad',
      key: 'ID_ciudad'
    }
  }
});

module.exports = Usuario;
