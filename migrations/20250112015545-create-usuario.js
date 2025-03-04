'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuario', {
      ID_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      correo_electronico: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      contraseña: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING,
      },
      direccion: {
        type: Sequelize.TEXT,
      },
      ID_ciudad: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ciudad',
          key: 'ID_ciudad',
        },
        allowNull: false,
      },
      fecha_registro: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      fecha_ultimo_acceso: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuario');
  }
};
