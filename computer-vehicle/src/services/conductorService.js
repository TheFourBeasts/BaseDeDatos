const ConductorDAO = require('../daos/conductorDAO')
const UsuarioService= require('../services/usuarioService')
const UsuarioFilter = require('../filters/usuarioFilter')
const UsuarioDAO = require('../daos/usuarioDAO') 

class ConductorService{
    static async get(id) {
		try {
			const conductor = await ConductorDAO.fetch(id)
			return conductor
		} catch(err) {
			throw err
		}
    }

	static async find(filter) {
		try {
			const conductors = await ConductorDAO.find(filter.filterData(), filter.pagination)
			return conductors
		} catch(err) {
			throw err
		}
	}

    static async count(filter) {
		try {
			return await ConductorDAO.count(filter.filterData())
		} catch (err) {
			throw err
		}
    }

    static async save(conductor) {
		let usuario = await UsuarioDAO.getByUsername(conductor.usuario)
		if(usuario){
			conductor.usuario = usuario
			conductor = await ConductorDAO.save(conductor)
            return conductor
		}
		throw new Error('Invalid username')
		
    }

	static async update(id, conductor) {
		let usuarioViejo = await ConductorDAO.fetch(id)
		//let validar = usuarioViejo.usuario
		let json = JSON.stringify(usuarioViejo.usuario)
		let usernameViejo = JSON.parse(json).username
		if(usernameViejo === conductor.usuario){
			let usuarioEncontrado = await UsuarioDAO.getByUsername(conductor.usuario)
			if(usuarioEncontrado){
			conductor.usuario = usuarioEncontrado
			conductor = await ConductorDAO.update(id, conductor)
			return await this.get(id)
			}
			
		}
		throw new Error('Invalid username')		
			
    }

    static async delete(id) {
		try {
			return await ConductorDAO.delete(id)
		} catch (err) {
			throw err
		}
    }
}

module.exports = ConductorService