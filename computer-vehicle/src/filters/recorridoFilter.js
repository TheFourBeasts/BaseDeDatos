const GenericFilter = require('./genericFilter');
class RecorridoFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            timestamp: null,
			velocidad: null,
			kilometraje: null,
			posicion: null,
			conductor: null,
        })
    }

};

module.exports = RecorridoFilter;