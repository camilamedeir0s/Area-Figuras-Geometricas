const express = require('express');
const app = express();
const areas = require('./areas');

app.get('/', (req, res) => {
    res.send('Olá mundo');
})

app.get('/quadrado/:lado', areas.quadrado);
app.get('/triangulo/:base/:altura', areas.triangulo);
app.get('/retangulo/:base/:altura', areas.retangulo);


app.listen(8081, () => {
    console.log('Servidor rodando.')
})