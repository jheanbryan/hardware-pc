const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    oldValue: { type: Number },
    currentValue: { type: Number, reequired: true },
    offer: { type: Boolean, reequired: true },
    description: { type: String, required: true },
    img: 
        {
            nameImg: { type: String, required: true },
            srcImg: { type: String, required: true }
        },
    creation: { type: Date,  default: Date.now}
});

module.exports = mongoose.model('Products', productSchema);

/*
name - nome do produto
title - titulo, como aparecerá no html
oldValue - valor antigo do produto (se estiver em promocao)
currentValue - valor atual do produto
offer - se o produto está em oferta, recebe true ou false
description - descrição do produto
img - imagem do produto, é passsada como image ao fazer o post
*/