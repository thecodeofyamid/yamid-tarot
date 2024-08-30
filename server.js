const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');

// Cargar las variables de entorno desde .env
dotenv.config();

// Crear una aplicación Express
const app = express();

app.use(express.static('public'))

// Definir un puerto
const port = 3000;

// Crear la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

// Crear una ruta GET para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'))
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
