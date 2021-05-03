const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const VehiculoSchema = Schema({
	posicionactual: {
		type: String,
	},
	usuarios: {
		type: Schema.Types.ObjectId,
	},
	recorridototal: {
		type: String,
	},
	
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);