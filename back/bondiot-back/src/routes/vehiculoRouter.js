const express = require('express')
const VehiculoController = require('../controllers/vehiculoController');

const api = express.Router();

api.get('/:id', VehiculoController.getVehiculoById);
api.get('', VehiculoController.getVehiculos);
api.post('', VehiculoController.createVehiculo);
api.put('/:id', VehiculoController.updateVehiculo);
api.delete('/:id', VehiculoController.deleteVehiculo);
api.delete('/', VehiculoController.deleteVehiculoAll);
module.exports = api;