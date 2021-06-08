const ConductorDAO = require('../daos/conductorDAO')
const RecorridoService=require('../services/recorridoService')
const crypto = require('crypto')
const recorrido = require('../models/recorrido')

// hash password with sha256
const sha256 = function(password, salt){
    const hash = crypto.createHmac('sha256', salt)
    hash.update(password)
    return {
        salt,
        passwordHash: hash.digest('hex')
    }
}
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
		try {
			let conductor_anterior= await ConductorDAO.getByUsername(conductor.username)
			if(!conductor_anterior){
				let recorrido_auxiliar= {
					timestamp:conductor.recorrido.timestamp,
					kilometraje:conductor.recorrido.kilometraje,
					velocidad:conductor.recorrido.velocidad,
					posicion:conductor.recorrido.posicion,
					conductor: conductor.username
				}
				console.log(recorrido_auxiliar)
				let recorrido = await RecorridoService.save(recorrido_auxiliar)
				conductor.recorrido= recorrido
				conductor = await ConductorDAO.save(conductor)
				return conductor
			}
			throw new Error('Username is duplicated')
		} catch (err) {
			throw err
		}
    }

	static async update(id, conductor) {
		try {
			conductor = await ConductorDAO.update(id, conductor)
			return await this.get(id)
		} catch (err) {
			throw err
		}
    }

    static async delete(id) {
		try {
			return await ConductorDAO.delete(id)
		} catch (err) {
			throw err
		}
    }

	static async auth(username, requestPassword) {
        const conductor = await ConductorDAO.getByUsername(username)
        if(conductor){
            const { passwordHash } = sha256(requestPassword, conductor.salt)
            if (conductor.password === passwordHash) {
                return conductor
            }
        }
        throw new Error('Invalid login data')
    }
}

module.exports = ConductorService