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
		recorridoDTO.posicion = recorrido.posicion
		recorridoDTO.velocidad = recorrido.velocidad
		recorridoDTO.fecha = recorrido.fecha
		recorridoDTO.hora = recorrido.hora
		recorridoDTO.kilometraje = recorrido.kilometraje
		
		return recorridoDTO
	}

	static fromDTO(recorridoDTO) {
		const recorrido = super.fromDTO(recorridoDTO, Recorrido)
		recorrido.posicion = recorridoDTO.posicion
		recorrido.velocidad = recorridoDTO.velocidad
		recorrido.fecha = recorridoDTO.fecha
		recorrido.hora = recorridoDTO.hora
		recorrido.kilometraje = recorridoDTO.kilometraje 
		
		return recorrido
	}

}

module.exports = RecorridoAssembler