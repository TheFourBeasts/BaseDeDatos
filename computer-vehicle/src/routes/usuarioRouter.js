const express = require('express')
const UsuarioController = require('../controllers/usuarioController');

const api = express.Router();

api.get('/:id', UsuarioController.getUsuarioById);
api.get('', UsuarioController.getUsuarios);
api.post('', UsuarioController.createUsuario);
api.put('/:id', UsuarioController.updateUsuario);
api.delete('/:id', UsuarioController.deleteUsuario);

module.exports = api;