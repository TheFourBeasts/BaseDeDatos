const GenericFilter = require('./genericFilter');
class RecorridoFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            posicion: null,
			velocidad: null,
			fecha: null,
			hora: null,
            kilometraje:null,
        })
    }

};

module.exports = RecorridoFilter;