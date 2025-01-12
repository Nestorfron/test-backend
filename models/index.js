// models/index.js
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Rol = require('./rol');
const OfertaEmpleo = require('./oferta_de_empleo');
const CategoriaOferta = require('./categoria_de_oferta');
const Modalidad = require('./modalidad');
const Ciudad = require('./ciudad');
const Pais = require('./pais');
const SolicitudEmpleo = require('./solicitud_de_empleo');
const EstadoSolicitud = require('./estado_de_solicitud');
const Notificacion = require('./notificacion');
const HistorialCambio = require('./historial_de_cambios');
const Accion = require('./accion');
const Entidad = require('./entidad');


module.exports = {
  Usuario,
  Rol,
  OfertaEmpleo,
  CategoriaOferta,
  Modalidad,
  Ciudad,
  Pais,
  SolicitudEmpleo,
  EstadoSolicitud,
  Notificacion,
  HistorialCambio,
  Accion,
  Entidad,
  sequelize,  // Asegúrate de exportar la instancia de sequelize
};
