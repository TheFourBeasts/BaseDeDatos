const GenericAssembler = require('./genericAssembler')


const Vehiculo = require('../models/vehiculo')
const VehiculoDTO = require('../dtos/vehiculoDTO')

class VehiculoAssembler extends GenericAssembler{

	static toDTOs(vehiculos) {
		return super.convertList(vehiculos, VehiculoAssembler.toDTO);
	}

	static fromDTOs(vehiculosDTO) {
		return super.convertList(vehiculosDTO, VehiculoAssembler.fromDTO);
	}

	static toDTO(vehiculo) {
		const vehiculoDTO = super.toDTO(vehiculo, VehiculoDTO);
		vehiculoDTO.posicionActual = vehiculo.posicionActual;
		vehiculoDTO.recorridoTotal = vehiculo.recorridoTotal;
		vehiculoDTO.usuario = vehiculo.usuario;
		
		return vehiculoDTO;
	}

	static fromDTO(vehiculoDTO) {
		const vehiculo = super.fromDTO(vehiculoDTO, Vehiculo);
		vehiculo.posicionActual = vehiculoDTO.posicionActual;
		vehiculo.recorridoTotal = vehiculoDTO.recorridoTotal;
		vehiculo.usuario = vehiculoDTO.usuario;

		return vehiculo;
	}

}

module.exports = VehiculoAssembler