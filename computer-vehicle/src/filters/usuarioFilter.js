const GenericFilter = require('./genericFilter');
class UsuarioFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            id: null,
			nombre: null,
			apellido: null,
			recorrido: null,
        })
    }

};

module.exports = UsuarioFilter;