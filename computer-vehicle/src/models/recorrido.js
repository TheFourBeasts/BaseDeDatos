const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecorridoSchema = Schema({
	timestamp: {
		type: String,
	},
	velocidad: {
		type: String,
	},
	kilometraje: {
		type: String,
	},
	posicion: {
		type: String,
	},
	conductor: {
		type: String,
	},
	
});

module.exports = mongoose.model('Recorrido', RecorridoSchema);