const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Ciudad = require('./ciudad');
const Modalidad = require('./modalidad');
const Categoria_Oferta = require('./categoria_de_oferta');

const Oferta_de_Empleo = sequelize.define('Oferta_de_Empleo', {
  ID_oferta: {
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
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  salario_rango_min: {
    type: DataTypes.DECIMAL
  },
  salario_rango_max: {
    type: DataTypes.DECIMAL
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  fecha_limite: {
    type: DataTypes.DATE
  },
  ID_ciudad: {
    type: DataTypes.INTEGER,
    references: {
      model: Ciudad,
      key: 'ID_ciudad'
    }
  },
  estado: {
    type: DataTypes.STRING
  },
  ID_modalidad: {
    type: DataTypes.INTEGER,
    references: {
      model: Modalidad,
      key: 'ID_modalidad'
    }
  },
  ID_categoria_oferta: {
    type: DataTypes.INTEGER,
    references: {
      model: Categoria_Oferta,
      key: 'ID_categoria_oferta'
    }
  }
});

module.exports = Oferta_de_Empleo;
