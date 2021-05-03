const GenericAssembler = require('./genericAssembler')


const Vehiculo = require('../models/vehiculo')
const VehiculoDTO = require('../dtos/vehiculoDTO')

class VehiculoAssembler extends GenericAssembler{

	static toDTOs(vehiculos) {
		return super.convertList(vehiculos, VehiculoAssembler.toDTO)
	}

	static fromDTOs(vehiculosDTO) {
		return super.convertList(vehiculosDTO, VehiculoAssembler.fromDTO)
	}

	static toDTO(vehiculo) {
		const vehiculoDTO = super.toDTO(vehiculo, VehiculoDTO)
		vehiculoDTO.posicionactual = vehiculo.posicionactual
		vehiculoDTO.usuarios = vehiculo.usuarios
		vehiculoDTO.recorridototal = vehiculo.recorridototal
		
		return vehiculoDTO
	}

	static fromDTO(vehiculoDTO) {
		const vehiculo = super.fromDTO(vehiculoDTO, Vehiculo)
		vehiculo.posicionactual = vehiculoDTO.posicionactual
		vehiculo.usuarios = vehiculoDTO.usuarios
		vehiculo.recorridototal = vehiculoDTO.recorridototal
		
		return vehiculo
	}

}

module.exports = VehiculoAssembler