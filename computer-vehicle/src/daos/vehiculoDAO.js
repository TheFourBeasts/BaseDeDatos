const Vehiculo = require('../models/vehiculo');

class VehiculoDAO{
    static save(vehiculo){
        return new Promise((resolve, reject) => {
            Vehiculo.create(vehiculo, (err, vehiculoStored) => {
                if (err || !vehiculoStored){
                    reject({message: "no pudo guardarse el vehiculo"});
                } else {
                    vehiculo._id = vehiculoStored._id;
                    resolve(vehiculo);
                }
            });
        })
    }

    static fetch(id){
        return new Promise((resolve, reject) => {
            Vehiculo.findById(id).exec((err, vehiculo) => {
                if (err || !vehiculo){
                    reject ({message: "No pudo econtrarse el vehiculo"});
                } else {
                    resolve(vehiculo);
                }
            })
        })
    }

    static find(filter, pagination){
        return new Promise((resolve, reject) => {
            Vehiculo.find(filter).limit(pagination.limit).skip(pagination.offset).exec((err, vehiculos) => {
                if (err || !vehiculos){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(vehiculos);                    
                }
            })
        })
    }

    static count(filter){
        return new Promise((resolve, reject) => {
            Vehiculo.count(filter).exec((err, total) => {
                if (err){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(total);                    
                }
            })
        })
    }

    static update(id, vehiculo) {
		const {_id, ...data} = vehiculo._doc;
		let dtoUpdate = {$set:data}
        return new Promise((resolve, reject) => {
            Vehiculo.findByIdAndUpdate(id, dtoUpdate).exec((err, vehiculo2) => {
                if (err || !vehiculo2){
                    console.log(err);
                    reject({message: "error interno"});
                } else {
                    resolve(vehiculo2);
                }
            })
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            
            Vehiculo.findByIdAndRemove(id).exec((err, deleted) => {
                if (err || !deleted){
                    reject({message: "no se puede borrar el vehiculo"});
                } else {
                    resolve({_id:id});
                }
            })
        })
    }
}

module.exports = VehiculoDAO