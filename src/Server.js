const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3006; // Cambia si es necesario

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia por tu usuario de MySQL
    password: '', // Cambia por tu contraseña
    database: 'protect_our_wildlife' // Nombre de tu base de datos
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Ruta para registrar un voluntario
app.post('/register', (req, res) => {
    const { nombre, apellido, edad, correo, tipoVoluntario, pais, direccion } = req.body;
    const sql = 'INSERT INTO voluntarios (nombre, apellido, edad, correo, tipoVoluntario, pais, direccion) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [nombre, apellido, edad, correo, tipoVoluntario, pais, direccion], (err, result) => {
        if (err) throw err;
        res.send('Voluntario registrado con éxito');
    });
});

app.post('/contact', (req, res) => {
    const { nombre, correo, pais, mensaje } = req.body;

    // Valida los datos recibidos
    if (!nombre || !correo || !pais || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Inserta los datos en la base de datos
    const query = 'INSERT INTO contacto (nombre, correo, pais, mensaje) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, correo, pais, mensaje], (err, results) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return res.status(500).json({ error: 'Error al guardar los datos.' });
        }
        res.status(201).json({ message: 'Mensaje enviado con éxito.', id: results.insertId });
    });
});
// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
