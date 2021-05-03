const GenericModelDTO = require('./genericModelDTO')

class VehiculoDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.posicionactual = null
		this.usuarios = null
		this.recorridototal = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = VehiculoDTO