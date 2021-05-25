const GenericController = require('./genericController')
const ConductorService = require('../services/conductorService')
const ConductorDTO = require('../dtos/conductorDTO')
const ConductorFilter = require('../filters/conductorFilter')
const ConductorAssembler = require('../assemblers/conductorAssembler')

class ConductorController extends GenericController{

    static getConductorById(req, res, next) {
        const id = req.params.id
        ConductorController.resolve(next, ConductorService.get(id), conductor => {
            res.status(200).send({
                data: ConductorAssembler.toDTO(conductor),
            })
        })
    }

    static getConductors(req, res, next) {
        const filter = new ConductorFilter()
        filter.fillData(req.query)
        ConductorController.resolve(next,
                Promise.all([
                    ConductorService.find(filter), 
                    ConductorService.count(filter)
                ]), results => {
            res.status(200).send({
                data: {
                    list: ConductorAssembler.toDTOs(results[0]),
                    total:results[1],
                    offset: filter.pagination.offset,
                    limit: filter.pagination.limit
                }
            })
        })
    }
    
    static createConductor(req, res, next) {
        let conductorDTO = new ConductorDTO()
        conductorDTO.hydrate(req.body)
        ConductorController.resolve(next, ConductorService.save(ConductorAssembler.fromDTO(conductorDTO)), conductor => {
                res.status(201).send({
                    data: ConductorAssembler.toDTO(conductor)
                })
            })
    }
    
    static updateConductor(req, res, next) {
        let id = req.params.id
        let conductorDTO = new ConductorDTO()
        conductorDTO.hydrate(req.body)
        ConductorController.resolve(next, ConductorService.update(id, ConductorAssembler.fromDTO(conductorDTO)), conductor => {
                res.status(200).send({
                    data: ConductorAssembler.toDTO(conductor)
                })
            })
    }
    
    static deleteConductor(req, res, next) {
        let id = req.params.id
        ConductorController.resolve(next, ConductorService.delete(id), message => {
                res.status(200).send({
                    data: message
                })
            })
    }
}

module.exports = ConductorController