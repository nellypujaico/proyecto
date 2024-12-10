const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // Si usas MySQL, cambia según tu base de datos

const app = express();
const port = 5000;

// Configuración de CORS
app.use(cors());

// Configuración de body-parser para leer los datos del formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos (cambia las credenciales según tu configuración)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'noticias',
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Endpoint para registrar un usuario
app.post('/api/registrarse', (req, res) => {
  const { nombre_usuario, correo, contraseña } = req.body;

  // Insertar los datos en la base de datos
  const query = 'INSERT INTO usuarios (nombre_usuario, correo, contraseña) VALUES (?, ?, ?)';
  db.query(query, [nombre_usuario, correo, contraseña], (err, result) => {
    if (err) {
      res.status(500).send('Error al guardar el usuario');
    } else {
      res.status(200).send('Usuario registrado con éxito');
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
