const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConductorSchema = Schema({
	nombre: {
		type: String,
	},
	apellido: {
		type: String,
	},
	username: {
		type: String,
	},
	password: {
		type: String,
	},
	salt: {
		type: String,
	},
	recorrido: {
		type: Schema.Types.Mixed,
	},
	
});

module.exports = mongoose.model('Conductor', ConductorSchema);