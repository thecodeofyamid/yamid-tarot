// app.js
const express = require('express');

// Crear una aplicación Express
const app = express();

app.use(express.static('public'))

// Definir un puerto
const port = 3000;

// Crear una ruta GET para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'))
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

