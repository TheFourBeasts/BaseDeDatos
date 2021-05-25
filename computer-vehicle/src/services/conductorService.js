const ConductorDAO = require('../daos/conductorDAO')

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
			conductor = await ConductorDAO.save(conductor)
            return conductor
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
}

module.exports = ConductorService