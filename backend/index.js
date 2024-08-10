const express = require('express');
const mongoose = require('mongoose');
const api = express();

const URL_DB = '';
const API_PORT = 3000;

mongoose.connect(URL_DB);
mongoose.connection.on('connected', () => {
    console.log('API conectada ao BD!');
});

mongoose.connection.on('disconnected', () => {
    console.log('API foi desconectada do BD!');
});

mongoose.connection.on('error', (erro) => {
    console.log('Erro ao conectar no BD! ', erro);
});


api.listen(API_PORT, () => console.log('API Online!'));

api.get('/status', (req, res) => res.send('<h3>API Online!</h3>'));


const productsController = require('./controller/produto.js');
api.get('/product', productsController.listProducts);
api.post('/product', productsController.addProducts);
api.put('/product', productsController.editProducts);
api.delete('/product', productsController.deleteProducts);