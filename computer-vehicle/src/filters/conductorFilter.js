const GenericFilter = require('./genericFilter');
class ConductorFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            nombre: null,
			apellido: null,
			usuario: null,
			recorrido: null,
        })
    }

};

module.exports = ConductorFilter;