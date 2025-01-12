module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Usuarios', [
        {
          nombre: 'Admin',
          correo_electronico: 'admin@example.com',
          contraseña: 'admin123',
          // otros campos...
        },
      ]);
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Usuarios', null, {});
    },
  };
  