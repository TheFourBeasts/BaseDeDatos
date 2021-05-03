const GenericFilter = require('./genericFilter');
class VehiculoFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            posicionactual: null,
			usuarios: null,
			recorridototal: null,
        })
    }

};

module.exports = VehiculoFilter;