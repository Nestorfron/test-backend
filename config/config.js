require('dotenv').config(); // Para cargar las variables de entorno desde un archivo .env

module.exports = module.exports = {
  development: {
    url: process.env.DB_URL, // Usa la URL de la base de datos
    dialect: 'postgres',
    logging: false,
  },
};
