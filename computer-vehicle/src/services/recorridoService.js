const RecorridoDAO = require('../daos/recorridoDAO')

class RecorridoService{
    static async get(id) {
		try {
			const recorrido = await RecorridoDAO.fetch(id)
			return recorrido
		} catch(err) {
			throw err
		}
    }

	static async find(filter) {
		try {
			const recorridos = await RecorridoDAO.find(filter.filterData(), filter.pagination)
			return recorridos
		} catch(err) {
			throw err
		}
	}

    static async count(filter) {
		try {
			return await RecorridoDAO.count(filter.filterData())
		} catch (err) {
			throw err
		}
    }

    static async save(recorrido) {
		try {
			recorrido = await RecorridoDAO.save(recorrido)
            return recorrido
		} catch (err) {
			throw err
		}
    }

	static async update(id, recorrido) {
		try {
			recorrido = await RecorridoDAO.update(id, recorrido)
			return await this.get(id)
		} catch (err) {
			throw err
		}
    }

    static async delete(id) {
		try {
			return await RecorridoDAO.delete(id)
		} catch (err) {
			throw err
		}
    }
}

module.exports = RecorridoService