const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true, unique: true},
    value: { type: Number, reequired: true},
    description: { type: String, required: true },
    img: { type: Image, required: true},
    creation: { type: Date,  default: Date.now}
});

module.exports = mongoose.model('Products', productSchema);