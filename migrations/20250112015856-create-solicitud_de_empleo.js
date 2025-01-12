'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicitud_de_Empleo', {
      ID_solicitud: {
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
        onDelete: 'CASCADE',
      },
      ID_oferta: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Oferta_de_Empleo',
          key: 'ID_oferta',
        },
        onDelete: 'CASCADE',
      },
      fecha_solicitud: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      ID_estado_solicitud: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Estado_Solicitud',
          key: 'ID_estado_solicitud',
        },
      },
      comentarios: {
        type: Sequelize.TEXT,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Solicitud_de_Empleo');
  }
};
