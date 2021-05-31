const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConductorSchema = Schema({
	nombre: {
		type: String,
	},
	apellido: {
		type: String,
	},
	usuario: {
		type: Schema.Types.Mixed,
	},
	recorrido: {
		type: String,
	},
	
});

module.exports = mongoose.model('Conductor', ConductorSchema);