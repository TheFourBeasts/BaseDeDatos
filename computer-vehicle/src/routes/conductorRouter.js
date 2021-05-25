const express = require('express')
const ConductorController = require('../controllers/conductorController');

const api = express.Router();

api.get('/:id', ConductorController.getConductorById);
api.get('', ConductorController.getConductors);
api.post('', ConductorController.createConductor);
api.put('/:id', ConductorController.updateConductor);
api.delete('/:id', ConductorController.deleteConductor);

module.exports = api;