const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Rol = require('./rol');

const Usuario_Rol = sequelize.define('Usuario_Rol', {
  ID_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'ID_usuario'
    }
  },
  ID_rol: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
      key: 'ID_rol'
    }
  }
});

module.exports = Usuario_Rol;
