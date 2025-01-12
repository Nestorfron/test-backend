const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Entidad = require('./entidad');
const Accion = require('./accion');

const Historial_de_Cambios = sequelize.define('Historial_de_Cambios', {
  ID_historial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ID_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'ID_usuario'
    }
  },
  ID_entidad: {
    type: DataTypes.INTEGER,
    references: {
      model: Entidad,
      key: 'ID_entidad'
    }
  },
  ID_accion: {
    type: DataTypes.INTEGER,
    references: {
      model: Accion,
      key: 'ID_accion'
    }
  },
  fecha_cambio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  detalles: {
    type: DataTypes.TEXT
  }
});

module.exports = Historial_de_Cambios;
