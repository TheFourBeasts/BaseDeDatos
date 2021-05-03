const VehiculoDAO = require('../daos/vehiculoDAO')

class VehiculoService{
    static async get(id) {
		try {
			const vehiculo = await VehiculoDAO.fetch(id)
			return vehiculo
		} catch(err) {
			throw err
		}
    }

	static async find(filter) {
		try {
			const vehiculos = await VehiculoDAO.find(filter.filterData(), filter.pagination)
			return vehiculos
		} catch(err) {
			throw err
		}
	}

    static async count(filter) {
		try {
			return await VehiculoDAO.count(filter.filterData())
		} catch (err) {
			throw err
		}
    }

    static async save(vehiculo) {
		try {
			vehiculo = await VehiculoDAO.save(vehiculo)
            return vehiculo
		} catch (err) {
			throw err
		}
    }

	static async update(id, vehiculo) {
		try {
			vehiculo = await VehiculoDAO.update(id, vehiculo)
			return await this.get(id)
		} catch (err) {
			throw err
		}
    }

    static async delete(id) {
		try {
			return await VehiculoDAO.delete(id)
		} catch (err) {
			throw err
		}
    }
}

module.exports = VehiculoService