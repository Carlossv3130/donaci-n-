const mongoose = require('mongoose');

const donacionSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Donacion', donacionSchema);
