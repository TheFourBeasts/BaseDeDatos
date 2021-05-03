const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const VehiculoSchema = Schema({
	posicionActual: {
		type: String,
	},
	recorridoTotal: {
		type: Schema.Types.Mixed
	},
	usuario: {
		type: String
	}
	
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);