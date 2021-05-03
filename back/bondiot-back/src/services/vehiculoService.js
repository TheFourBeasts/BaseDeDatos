const vehiculoDAO = require('../daos/vehiculoDAO');

class VehiculoService{
    static async get(id) {
		try {
			const vehiculo = await vehiculoDAO.fetch(id)
			return vehiculo
		} catch(err) {
			throw err
		}
    }

	static async find(filter) {
		try {
			const vehiculos = await vehiculoDAO.find(filter.filterData(), filter.pagination)
			return vehiculos
		} catch(err) {
			throw err
		}
	}

    static async count(filter) {
		try {
			return await vehiculoDAO.count(filter.filterData())
		} catch (err) {
			throw err
		}
    }

    static async save(vehiculo) {
		try {
			
			let vehiculoCreated = await vehiculoDAO.save(vehiculo);
		
			return vehiculoCreated;
			
		} catch (err) {
			throw new Error("No pudo guardarse la vehiculo", err);
		}
    }

	static async update(id, vehiculo) {
		try {
			vehiculo = await vehiculoDAO.update(id, vehiculo)
			return await this.get(id)
		} catch (err) {
			throw err
		}
    }

    static async delete(id) {
		try {
			return await vehiculoDAO.delete(id);
		} catch (err) {
			throw err
		}
    }
	static async deleteAll() {
		try {
			return await vehiculoDAO.deleteAll();
		} catch (err) {
			throw err
		}
    }
}

async function savevehiculos(vehiculos, device, newvehiculos, globalTimestamp) {
    for (let vehiculo of vehiculos) {
        let newvehiculo = await vehiculoService.save({
            posicionActual: vehiculo.sensor,
            recorridoTotal: vehiculo.recorridoTotal,
            usuario: vehiculo.usuario,
        });
		newvehiculos.push(newvehiculo);
		console.log("newvehiculo", newvehiculos)
        await vehiculoPacketService.save({ globalTimestamp, "vehiculos": newvehiculos });
    }
}

module.exports = VehiculoService