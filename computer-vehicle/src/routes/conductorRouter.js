const express = require('express')
const ConductorMiddleware = require('../middlewares/conductorMiddleware')
const ConductorController = require('../controllers/conductorController');

const api = express.Router();

api.get('/:id', ConductorController.getConductorById);
api.get('', ConductorController.getConductors);
api.post('', 
	...ConductorMiddleware.createUserValidations(),
	ConductorMiddleware.hashPassword,
	ConductorController.createConductor);
api.put('/:id', 
	...ConductorMiddleware.createUserValidations(),
	ConductorMiddleware.hashPassword,
	ConductorController.updateConductor);
api.delete('/:id', ConductorController.deleteConductor);
api.post('/login', ConductorController.auth)
module.exports = api;