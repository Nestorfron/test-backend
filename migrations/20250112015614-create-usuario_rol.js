'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuario_Rol', {
      ID_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'ID_usuario',
        },
        onDelete: 'CASCADE',
      },
      ID_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rol',
          key: 'ID_rol',
        },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuario_Rol');
  }
};
