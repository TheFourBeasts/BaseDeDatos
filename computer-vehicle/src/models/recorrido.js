const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecorridoSchema = Schema({
	posicion: {
		type: String,
	},
	velocidad: {
		type: String,
	},
	fecha: {
		type: Date,
	},
	hora: {
		type: Date,
	},
	kilometraje: {
		type: String,
	},
	
});

module.exports = mongoose.model('Recorrido', RecorridoSchema);