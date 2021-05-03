const GenericModelDTO = require('./genericModelDTO')

class RecorridoDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.posicion = null
		this.velocidad = null
		this.fecha = null
		this.hora = null
		this.kilometraje=null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = RecorridoDTO