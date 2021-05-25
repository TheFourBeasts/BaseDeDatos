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
		type: Schema.Types.ObjectId,
	},
	recorrido: {
		type: Schema.Types.ObjectId,
	},
	
});

module.exports = mongoose.model('Conductor', ConductorSchema);