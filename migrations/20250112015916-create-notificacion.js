'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notificacion', {
      ID_notificacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ID_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'ID_usuario',
        },
        allowNull: false,
      },
      mensaje: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      fecha_envio: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Notificacion');
  }
};
