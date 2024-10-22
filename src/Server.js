const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'gmail', // o tu proveedor de correo (puede ser smtp, outlook, etc.)
//     auth: {
//         user: 'protectourwildlife620@gmail.com',
//         pass: 'Protect987', // Genera una contraseña de aplicación si usas Gmail
//     },
// });

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

    // // Configurar los detalles del correo
    // const mailOptions = {
    //     from: 'protectourwildlife620@gmail.com',
    //     to: correo, // El correo del usuario que se registra
    //     subject: 'Bienvenido al Voluntariado de POW',
    //     text: `Hola ${nombre} ${apellido},\n\nGracias por unirte como voluntario de POW. ¡Estamos emocionados de tenerte a bordo!`,
    //     html: `<p>Hola <strong>${nombre} ${apellido}</strong>,</p><p>Gracias por unirte como voluntario de <strong>POW</strong>. ¡Estamos emocionados de tenerte a bordo!</p>`
    // };

    // // Enviar el correo
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.error('Error enviando correo:', error);
    //         return res.status(500).send('Error enviando correo');
    //     }
    //     console.log('Correo enviado:', info.response);
    //     res.status(200).send('¡Registro completado y correo enviado!');
    // });
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

// Ruta para procesar donaciones
app.post('/donar', (req, res) => {
    const { correo, monto, numero_tarjeta, fecha_expiracion, cvv } = req.body;
    
    // Asegúrate de que el monto está formateado correctamente
    const montoDecimal = parseFloat(monto).toFixed(2);

    const sql = 'INSERT INTO donaciones (correo, monto, numero_tarjeta, fecha_expiracion, cvv) VALUES (?, ?, ?, ?, ?)';

    db.query(sql, [correo, montoDecimal, numero_tarjeta, fecha_expiracion, cvv], (err, result) => {
        if (err) {
            console.error('Error al insertar donación:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.send('Donación realizada con éxito');
    });
});

// Ruta para guardar testimonios
app.post('/testimonios', (req, res) => {
    const { nombre, correo, tipoVoluntario, mensaje } = req.body;

    if (!nombre || !correo || !mensaje || !tipoVoluntario) {
        return res.status(400).json({ message: 'Por favor completa todos los campos.' });
    }

    const sql = 'INSERT INTO testimonios (nombre, correo, tipoVoluntario, mensaje) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombre, correo, tipoVoluntario, mensaje], (err, result) => {
        if (err) {
            console.error('Error al insertar el testimonio:', err);
            return res.status(500).json({ message: 'Error al insertar el testimonio.' });
        }
        res.status(200).json({ message: 'Testimonio enviado con éxito.' });
    });
});

// Ruta para obtener los últimos 3 testimonios
app.get('/testimonios/ultimos', (req, res) => {
    const sql = 'SELECT nombre, tipoVoluntario, mensaje FROM testimonios ORDER BY fecha DESC LIMIT 3';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener los testimonios:', err);
            return res.status(500).json({ message: 'Error al obtener los testimonios.' });
        }
        console.log('Testimonios obtenidos:', results); // Log para ver los resultados
        res.status(200).json(results);
    });
});



// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
