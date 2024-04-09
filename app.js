const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const donacionesRoutes = require('./routes/donaciones');

const app = express();

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv://carlossv3130:Cardinal123@cluster0.zhf5u8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión a MongoDB establecida');
}).catch(err => {
    console.error('Error de conexión a MongoDB:', err.message);
});

// Configuración de body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de express-session
app.use(session({
    secret: 'secreto', // Cambiar esto por una cadena de texto aleatoria y segura
    resave: false,
    saveUninitialized: true
}));

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Usar las rutas de donaciones
app.use('/', donacionesRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
