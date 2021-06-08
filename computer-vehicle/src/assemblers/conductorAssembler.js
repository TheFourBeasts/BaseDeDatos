const GenericAssembler = require('./genericAssembler')
const Conductor = require('../models/conductor')
const ConductorDTO = require('../dtos/conductorDTO')

class ConductorAssembler extends GenericAssembler{

	static toDTOs(conductors) {
		return super.convertList(conductors, ConductorAssembler.toDTO)
	}

	static fromDTOs(conductorsDTO) {
		return super.convertList(conductorsDTO, ConductorAssembler.fromDTO)
	}

	static toDTO(conductor) {
		const conductorDTO = super.toDTO(conductor, ConductorDTO)
		conductorDTO.nombre = conductor.nombre
		conductorDTO.apellido = conductor.apellido
		conductorDTO.username = conductor.username
		conductorDTO.password = conductor.password
		conductorDTO.salt = conductor.salt
		conductorDTO.recorrido = conductor.recorrido
		
		return conductorDTO
	}

	static fromDTO(conductorDTO) {
		const conductor = super.fromDTO(conductorDTO, Conductor)
		conductor.nombre = conductorDTO.nombre
		conductor.apellido = conductorDTO.apellido
		conductor.username = conductorDTO.username
		conductor.password = conductorDTO.password
		conductor.salt = conductorDTO.salt
		conductor.recorrido = conductorDTO.recorrido
		
		return conductor
	}

}

module.exports = ConductorAssembler