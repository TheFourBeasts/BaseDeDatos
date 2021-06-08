const GenericAssembler = require('./genericAssembler')


const Recorrido = require('../models/recorrido')
const RecorridoDTO = require('../dtos/recorridoDTO')

class RecorridoAssembler extends GenericAssembler{

	static toDTOs(recorridos) {
		return super.convertList(recorridos, RecorridoAssembler.toDTO)
	}

	static fromDTOs(recorridosDTO) {
		return super.convertList(recorridosDTO, RecorridoAssembler.fromDTO)
	}

	static toDTO(recorrido) {
		const recorridoDTO = super.toDTO(recorrido, RecorridoDTO)
		recorridoDTO.timestamp = recorrido.timestamp
		recorridoDTO.velocidad = recorrido.velocidad
		recorridoDTO.kilometraje = recorrido.kilometraje
		recorridoDTO.posicion = recorrido.posicion
		recorridoDTO.conductor = recorrido.conductor
		
		return recorridoDTO
	}

	static fromDTO(recorridoDTO) {
		const recorrido = super.fromDTO(recorridoDTO, Recorrido)
		recorrido.timestamp = recorridoDTO.timestamp
		recorrido.velocidad = recorridoDTO.velocidad
		recorrido.kilometraje = recorridoDTO.kilometraje
		recorrido.posicion = recorridoDTO.posicion
		recorrido.conductor = recorridoDTO.conductor
		
		return recorrido
	}

}

module.exports = RecorridoAssembler