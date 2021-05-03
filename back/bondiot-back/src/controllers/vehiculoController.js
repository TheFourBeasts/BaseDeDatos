const GenericController = require('./genericController')
const VehiculoService = require('../services/vehiculoService')
const VehiculoDTO = require('../dtos/vehiculoDTO')
const VehiculoFilter = require('../filters/vehiculoFilter')
const VehiculoAssembler = require('../assemblers/vehiculoAssembler')

class VehiculoController extends GenericController{

    static getVehiculoById(req, res, next) {
        const id = req.params.id
        VehiculoController.resolve(next, VehiculoService.get(id), vehiculo => {
            res.status(200).send({
                data: VehiculoAssembler.toDTO(vehiculo),
            })
        })
    }

    static getVehiculos(req, res, next) {
        const filter = new VehiculoFilter()
        filter.fillData(req.query)
        VehiculoController.resolve(next,
                Promise.all([
                    VehiculoService.find(filter), 
                    VehiculoService.count(filter)
                ]), results => {
            res.status(200).send({
                data: {
                    list: VehiculoAssembler.toDTOs(results[0]),
                    total:results[1],
                    offset: filter.pagination.offset,
                    limit: filter.pagination.limit
                }
            })
        })
    }
    
    static createVehiculo(req, res, next) {
        let vehiculoDTO = new VehiculoDTO()
        vehiculoDTO.hydrate(req.body)
        VehiculoController.resolve(next, VehiculoService.save(VehiculoAssembler.fromDTO(vehiculoDTO)), vehiculo => {
                res.status(201).send({
                    data: VehiculoAssembler.toDTO(vehiculo)
                })
            })
    }
    
    static updateVehiculo(req, res, next) {
        let id = req.params.id
        let vehiculoDTO = new VehiculoDTO()
        vehiculoDTO.hydrate(req.body)
        VehiculoController.resolve(next, VehiculoService.update(id, VehiculoAssembler.fromDTO(vehiculoDTO)), vehiculo => {
                res.status(200).send({
                    data: VehiculoAssembler.toDTO(vehiculo)
                })
            })
    }
    
    static deleteVehiculo(req, res, next) {
        let id = req.params.id
        VehiculoController.resolve(next, VehiculoService.delete(id), message => {
                res.status(200).send({
                    data: message
                })
            })
    }
    static deleteVehiculoAll(req, res, next) {
        let id = req.params.id
        VehiculoController.resolve(next, VehiculoService.deleteAll(), message => {
                res.status(200).send({
                    data: message
                })
            })
    }
}

module.exports = VehiculoController