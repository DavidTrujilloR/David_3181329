const express = require('express');
const path = require('path');
const app = express();
const port = 3009;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

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

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});