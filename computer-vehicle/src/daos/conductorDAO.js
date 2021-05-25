const Conductor = require('../models/conductor');

class ConductorDAO{
    static save(conductor){
        return new Promise((resolve, reject) => {
            Conductor.create(conductor, (err, conductorStored) => {
                if (err || !conductorStored){
                    reject({message: "no pudo guardarse el conductor"});
                } else {
                    conductor._id = conductorStored._id;
                    resolve(conductor);
                }
            });
        })
    }

    static fetch(id){
        return new Promise((resolve, reject) => {
            Conductor.findById(id).exec((err, conductor) => {
                if (err || !conductor){
                    reject ({message: "No pudo encontrarse el conductor"});
                } else {
                    resolve(conductor);
                }
            })
        })
    }

    static find(filter, pagination){
        return new Promise((resolve, reject) => {
            Conductor.find(filter).limit(pagination.limit).skip(pagination.offset).exec((err, conductors) => {
                if (err || !conductors){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(conductors);                    
                }
            })
        })
    }

    static count(filter){
        return new Promise((resolve, reject) => {
            Conductor.count(filter).exec((err, total) => {
                if (err){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(total);                    
                }
            })
        })
    }

    static update(id, conductor) {
		const {_id, ...data} = conductor._doc;
		let dtoUpdate = {$set:data}
        return new Promise((resolve, reject) => {
            Conductor.findByIdAndUpdate(id, dtoUpdate).exec((err, conductor2) => {
                if (err || !conductor2){
                    console.log(err);
                    reject({message: "error interno"});
                } else {
                    resolve(conductor2);
                }
            })
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            
            Conductor.findByIdAndRemove(id).exec((err, deleted) => {
                if (err || !deleted){
                    reject({message: "no se puede borrar el conductor"});
                } else {
                    resolve({id:id});
                }
            })
        })
    }
}

module.exports = ConductorDAO