const GenericModelDTO = require('./genericModelDTO')

class VehiculoDTO extends GenericModelDTO {
    constructor(){
      super();
      this.id = null;
      this.posicionActual = null;
      this.recorridoTotal = null;
      this.usuario = null;
     
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = VehiculoDTO