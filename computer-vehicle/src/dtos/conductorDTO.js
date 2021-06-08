const GenericModelDTO = require('./genericModelDTO')

class ConductorDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.nombre = null
		this.apellido = null
		this.username = null
		this.password = null
		this.salt = null
		this.recorrido = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = ConductorDTO