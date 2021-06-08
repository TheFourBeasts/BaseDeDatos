const GenericModelDTO = require('./genericModelDTO')

class RecorridoDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.timestamp = null
		this.velocidad = null
		this.kilometraje = null
		this.posicion = null
		this.conductor = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = RecorridoDTO