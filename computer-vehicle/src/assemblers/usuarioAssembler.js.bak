const GenericAssembler = require('./genericAssembler')


const Usuario = require('../models/usuario')
const UsuarioDTO = require('../dtos/usuarioDTO')

class UsuarioAssembler extends GenericAssembler{

	static toDTOs(usuarios) {
		return super.convertList(usuarios, UsuarioAssembler.toDTO)
	}

	static fromDTOs(usuariosDTO) {
		return super.convertList(usuariosDTO, UsuarioAssembler.fromDTO)
	}

	static toDTO(usuario) {
		const usuarioDTO = super.toDTO(usuario, UsuarioDTO)
		usuarioDTO.id = usuario.id
		usuarioDTO.nombre = usuario.nombre
		usuarioDTO.apellido = usuario.apellido
		usuarioDTO.recorrido = usuario.recorrido
		
		return usuarioDTO
	}

	static fromDTO(usuarioDTO) {
		const usuario = super.fromDTO(usuarioDTO, Usuario)
		usuario.id = usuarioDTO.id
		usuario.nombre = usuarioDTO.nombre
		usuario.apellido = usuarioDTO.apellido
		usuario.recorrido = usuarioDTO.recorrido
		
		return usuario
	}

}

module.exports = UsuarioAssembler