const { Sequelize } = require('sequelize');

// Configuración de la conexión
const sequelize = new Sequelize({
  username: 'postgres',
  password: 'nestor',
  database: 'job',
  host: 'localhost',
  dialect: 'postgres',
  port: 5432, // Puerto por defecto
});

// Prueba de la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos!');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection();
