const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UsuarioSchema = Schema({
	id: {
		type: String,
	},
	nombre: {
		type: String,
	},
	apellido: {
		type: String,
	},
	recorrido: {
		type: Schema.Types.ObjectId,
	},
	
});

module.exports = mongoose.model('Usuario', UsuarioSchema);