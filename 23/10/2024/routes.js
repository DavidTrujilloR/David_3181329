const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('¡Hola, desde routes.js!');
});

router.get('/about', (req, res) => {
    res.send('Acerca de nosotros');
});

router.get('/contact', (req, res) => {
    res.send('Contacto');
});

module.exports = router;