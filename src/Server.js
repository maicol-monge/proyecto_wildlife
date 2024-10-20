const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Cambia si es necesario

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia por tu usuario de MySQL
  password: '', // Cambia por tu contraseña
  database: 'voluntarios_db' // Nombre de tu base de datos
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Ruta para registrar un voluntario
app.post('/register', (req, res) => {
  const { nombre, apellido, edad, correo, tipoVoluntario, direccion } = req.body;
  const sql = 'INSERT INTO voluntarios (nombre, apellido, edad, correo, tipoVoluntario, direccion) VALUES (?, ?, ?, ?, ?, ?)';
  
  db.query(sql, [nombre, apellido, edad, correo, tipoVoluntario, direccion], (err, result) => {
    if (err) throw err;
    res.send('Voluntario registrado con éxito');
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
