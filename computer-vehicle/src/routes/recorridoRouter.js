const express = require('express')
const RecorridoController = require('../controllers/recorridoController');

const api = express.Router();

api.get('/:id', RecorridoController.getRecorridoById);
api.get('', RecorridoController.getRecorridos);
api.post('', RecorridoController.createRecorrido);
api.put('/:id', RecorridoController.updateRecorrido);
api.delete('/:id', RecorridoController.deleteRecorrido);

module.exports = api;