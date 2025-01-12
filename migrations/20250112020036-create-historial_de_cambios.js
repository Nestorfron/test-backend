'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Historial_de_Cambios', {
      ID_cambio: {
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
      descripcion_cambio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      fecha_cambio: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Historial_de_Cambios');
  }
};
