const Recorrido = require('../models/recorrido');

class RecorridoDAO{
    static save(recorrido){
        return new Promise((resolve, reject) => {
            Recorrido.create(recorrido, (err, recorridoStored) => {
                if (err || !recorridoStored){
                    reject({message: "no pudo guardarse el recorrido"});
                } else {
                    recorrido._id = recorridoStored._id;
                    resolve(recorrido);
                }
            });
        })
    }

    static fetch(id){
        return new Promise((resolve, reject) => {
            Recorrido.findById(id).exec((err, recorrido) => {
                if (err || !recorrido){
                    reject ({message: "No pudo econtrarse el recorrido"});
                } else {
                    resolve(recorrido);
                }
            })
        })
    }

    static find(filter, pagination){
        return new Promise((resolve, reject) => {
            Recorrido.find(filter).limit(pagination.limit).skip(pagination.offset).exec((err, recorridos) => {
                if (err || !recorridos){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(recorridos);                    
                }
            })
        })
    }

    static count(filter){
        return new Promise((resolve, reject) => {
            Recorrido.count(filter).exec((err, total) => {
                if (err){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(total);                    
                }
            })
        })
    }

    static update(id, recorrido) {
		const {_id, ...data} = recorrido._doc;
		let dtoUpdate = {$set:data}
        return new Promise((resolve, reject) => {
            Recorrido.findByIdAndUpdate(id, dtoUpdate).exec((err, recorrido2) => {
                if (err || !recorrido2){
                    console.log(err);
                    reject({message: "error interno"});
                } else {
                    resolve(recorrido2);
                }
            })
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            
            Recorrido.findByIdAndRemove(id).exec((err, deleted) => {
                if (err || !deleted){
                    reject({message: "no se puede borrar el recorrido"});
                } else {
                    resolve({_id:id});
                }
            })
        })
    }
}

module.exports = RecorridoDAO