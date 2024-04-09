const Donacion = require('../models/donacion');

// Controladores
exports.showEncuesta = (req, res) => {
    res.render('encuesta');
};

exports.saveEncuesta = async (req, res) => {
    try {
        await Donacion.create(req.body);
        res.redirect('/donaciones');
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al procesar la donación.');
    }
};

exports.showDonaciones = async (req, res) => {
    try {
        const donaciones = await Donacion.find();
        res.render('donaciones', { donaciones });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener las donaciones.');
    }
};
