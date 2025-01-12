const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Oferta_de_Empleo = require('./oferta_de_empleo');
const Estado_Solicitud = require('./estado_de_solicitud');

const Solicitud_de_Empleo = sequelize.define('Solicitud_de_Empleo', {
  ID_solicitud: {
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
  ID_oferta: {
    type: DataTypes.INTEGER,
    references: {
      model: Oferta_de_Empleo,
      key: 'ID_oferta'
    }
  },
  fecha_solicitud: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  ID_estado_solicitud: {
    type: DataTypes.INTEGER,
    references: {
      model: Estado_Solicitud,
      key: 'ID_estado_solicitud'
    }
  },
  comentarios: {
    type: DataTypes.TEXT
  }
});

module.exports = Solicitud_de_Empleo;
