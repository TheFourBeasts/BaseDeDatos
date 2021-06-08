const GenericFilter = require('./genericFilter');
class ConductorFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            username: null,
			password: null,
			salt: null,
        })
    }

};

module.exports = ConductorFilter;