const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Oferta_de_Empleo = require('./oferta_de_empleo');

const Notificacion = sequelize.define('Notificacion', {
  ID_notificacion: {
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
  mensaje: {
    type: DataTypes.TEXT
  },
  tipo: {
    type: DataTypes.STRING
  },
  fecha_envio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  leido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Notificacion;
