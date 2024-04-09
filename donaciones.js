const express = require('express');
const router = express.Router();
const donacionesController = require('../controllers/donacionesController');

// Rutas
router.get('/', donacionesController.showEncuesta);
router.post('/encuesta', donacionesController.saveEncuesta);
router.get('/donaciones', donacionesController.showDonaciones);

module.exports = router;
