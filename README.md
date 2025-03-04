# TEST-BACKEND

# instalar las dependencias

npm init -y
npm install express sequelize pg pg-hstore dotenv
npm install --save-dev sequelize-cli nodemon
npm install bcryptjs express-validator cors helmet

# crear archivo .env y archivo .gitignore



# Crea la estrucruta de la base de datos (config, models, migrations, y seeders.)

npx sequelize init

# crear archivo config.js dentro de carpeta config

# crear carpeta routes

# crear carpeta controllers

# crear modelo y migración de la tabla

npx sequelize-cli model:generate --name Usuario --attributes nombre:string,correo:string,contraseña:string


# Crea una migración

npx sequelize migration:generate --name create-nombre_de_tabla 

# crear base de datos

npx sequelize-cli db:create

# Esto las ejecutará nuevamente en el orden correcto

npx sequelize-cli db:migrate 

# Esto revertirá todas las migraciones

npx sequelize-cli db:migrate:undo:all 

# estructura

/my-project
│
├── /config
│   ├── config.js            # Configuración de la base de datos
│
├── /models
│   ├── Usuario.js          # Modelo de Usuario
│   ├── Rol.js              # Modelo de Rol
│   ├── OfertaEmpleo.js     # Modelo de Oferta de Empleo
│   ├── CategoriaOferta.js  # Modelo de Categoría de Oferta
│   ├── Modalidad.js        # Modelo de Modalidad
│   ├── Pais.js             # Modelo de País
│   ├── Ciudad.js           # Modelo de Ciudad
│   ├── SolicitudEmpleo.js  # Modelo de Solicitud de Empleo
│   ├── EstadoSolicitud.js  # Modelo de Estado de Solicitud
│   ├── Notificacion.js     # Modelo de Notificación
│   ├── HistorialCambio.js  # Modelo de Historial de Cambios
│
├── /controllers            # Lógica de negocio (controladores)
│   ├── usuarioController.js
│   ├── ofertaEmpleoController.js
│   └── ...
│
├── /routes                 # Definición de rutas
│   ├── usuarioRoutes.js
│   ├── ofertaEmpleoRoutes.js
│   └── ...
│
├── /migrations             # Migraciones de Sequelize
│   ├── 20230101000000-create-usuario.js
│   ├── 20230101000001-create-ofertaEmpleo.js
│   └── ...
│
├── /seeders                # Datos iniciales o "seeds" para poblar la base de datos
│   ├── 20230101000000-seed-usuarios.js
│   ├── 20230101000001-seed-ofertas.js
│   └── ...
│
├── /middlewares            # Middleware para validaciones, autenticación, etc.
│   ├── authMiddleware.js
│
├── /services               # Servicios adicionales (ejemplo: manejo de notificaciones, etc.)
│
├── app.js                  # Archivo principal de la aplicación
├── package.json            # Dependencias y scripts del proyecto
└── .env                    # Archivo de configuración de entorno
