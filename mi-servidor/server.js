const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3009;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let formData = {};

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

app.get('/informacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'informacion.html'));
});

app.post('/submit-form', (req, res) => {
    formData = req.body;
    res.redirect('/informacion');
});

app.get('/get-info', (req, res) => {
    res.json(formData);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
