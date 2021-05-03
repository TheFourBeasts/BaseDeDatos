const Vehiculo = require('../models/vehiculo');
const VehiculoService = require('../services/vehiculoService');

class VehiculoDAO {

    static save(vehiculo){
        return Vehiculo.create(vehiculo);
    }

    static fetch(id){
        return Vehiculo.findById(id);
    }

    static find(filter, pagination){
        return Vehiculo.find(filter).limit(pagination.limit).skip(pagination.offset);
    }

    static count(filter){
        return Vehiculo.count(filter);
    }

    static update(id, vehiculo) {
        const {_id, ...data} = vehiculo._doc;
		let dtoUpdate = {$set:data}
        return Vehiculo.findByIdAndUpdate(id, dtoUpdate);
    }

    static delete(id){
        return Vehiculo.findByIdAndRemove(id).then(vehiculo => vehiculo.id);
    }

    static deleteAll(){
        return Vehiculo.find().then(vehiculos => vehiculos.map(m => this.delete(m.id)));
    }
}

module.exports = VehiculoDAO