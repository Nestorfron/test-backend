'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Oferta_de_Empleo', {
      ID_oferta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
      },
      salario_rango_min: {
        type: Sequelize.DECIMAL,
      },
      salario_rango_max: {
        type: Sequelize.DECIMAL,
      },
      fecha_publicacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      fecha_limite: {
        type: Sequelize.DATE,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ID_modalidad: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Modalidad',
          key: 'ID_modalidad',
        },
        allowNull: false,
      },
      ID_categoria_oferta: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categoria_Oferta',
          key: 'ID_categoria_oferta',
        },
        allowNull: false,
      },
      ID_ciudad: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ciudad',
          key: 'ID_ciudad',
        },
        allowNull: false,
      },
      ID_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'ID_usuario',
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Oferta_de_Empleo');
  }
};
