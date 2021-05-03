const GenericModelDTO = require('./genericModelDTO')

class UsuarioDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.id = null
		this.nombre = null
		this.apellido = null
		this.recorrido = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = UsuarioDTO