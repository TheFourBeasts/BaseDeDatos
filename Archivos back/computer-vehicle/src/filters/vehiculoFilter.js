const GenericFilter = require('./genericFilter');
class VehiculoFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            sensor: null,
			data: null,
        })
    }

};

module.exports = VehiculoFilter;