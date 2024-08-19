const express = require('express');
const mongoose = require('mongoose');
const api = express();
require('dotenv').config()

const URL_DB = process.env.URL_DB;
const API_PORT = process.env.API_PORT;

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


const productsController = require('./controller/product.js');
const upload = require('./config/multer.js');

api.get('/products', productsController.listProducts);
api.post('/product', upload.single('image'), productsController.addProducts);
api.put('/product', productsController.editProducts);
api.delete('/product', productsController.deleteProducts);