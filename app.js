const cors = require('cors')

const express = require ('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require ('connect-flash')
const session = require ('express-session')
const mysqlstore = require('express-mysql-session')
const passport = require('passport')

const { database } = require('./backend/keys.js')

const app = express()
app.use(cors())
require ('./backend/lib/passport.js')

/**Configuraciones */
app.set ('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views')); 
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs', 
    helpers: require('./backend/lib/handlebars.js')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(
    session({
        secret: 'faztmysqlnodesession',
        resave: false,
        saveUninitialized: false,
        store: new mysqlstore(database)
    })
)

app.use(flash())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

//Variables globales
app.use((req, res, next) => {
    app.locals.success = req.flash('success')
    app.locals.message = req.flash('message')
    app.locals.users = req.users
    next()
})
 
//Rutas
app.use(require('./backend/routes/index.js'));
app.use(require('./backend/routes/authentication.js'))

//app.use(require('./backend/routes/sms.js'))
app.use(require('./backend/routes/carros.js'))
app.use(require('./backend/routes/tokens.js'))
app.use(require('./backend/routes/conductores.js'))
app.use(require('./backend/routes/viajeros.js'))
app.use(require('./backend/routes/viajes.js'))
app.use(require('./backend/routes/cupones.js'))
app.use(require('./backend/routes/calificaciones.js'))
app.use(require('./backend/routes/compartir.js'))

app.use(express.static(path.resolve(__dirname, './backend/views')));
app.get ('/api', (req, res) => {
  res.sendFile(path.resolve(__dirname, './backend/views', 'index'));
})

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home', 'index.html'));
});
app.get('/home/conductores', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/conductores', 'index.html'));
});
app.get('/home/conductores/detalles-conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/conductores/detalles-conductor', 'index.html'));
});
app.get('/home/usuarios', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/usuarios', 'index.html'));
});
app.get('/home/usuarios/detalles-usuario', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/usuarios/detalles-usuario', 'index.html'));
});
app.get('/home/calificaciones', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/calificaciones', 'index.html'));
});
app.get('/home/calificaciones/detalles-conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/calificaciones/detalles-conductor', 'index.html'));
});
app.get('/viajes', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/viajes', 'index.html'));
});
app.get('/viajes/detalles-viaje', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/viajes/detalles-viaje', 'index.html'));
});
app.get('/estadisticas', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/estadisticas', 'index.html'));
});
app.get('/ingresos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/ingresos', 'index.html'));
});

//Iniciar el servidor
app.listen (app.get('port'), () => {
    console.log ('Server en puerto ', app.get ('port'))
})
