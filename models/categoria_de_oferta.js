const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria_Oferta = sequelize.define('Categoria_Oferta', {
  ID_categoria_oferta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Categoria_Oferta;
