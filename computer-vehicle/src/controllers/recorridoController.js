const GenericController = require('./genericController')
const RecorridoService = require('../services/recorridoService')
const RecorridoDTO = require('../dtos/recorridoDTO')
const RecorridoFilter = require('../filters/recorridoFilter')
const RecorridoAssembler = require('../assemblers/recorridoAssembler')

class RecorridoController extends GenericController{

    static getRecorridoById(req, res, next) {
        const id = req.params.id
        RecorridoController.resolve(next, RecorridoService.get(id), recorrido => {
            res.status(200).send({
                data: RecorridoAssembler.toDTO(recorrido),
            })
        })
    }

    static getRecorridos(req, res, next) {
        const filter = new RecorridoFilter()
        filter.fillData(req.query)
        RecorridoController.resolve(next,
                Promise.all([
                    RecorridoService.find(filter), 
                    RecorridoService.count(filter)
                ]), results => {
            res.status(200).send({
                data: {
                    list: RecorridoAssembler.toDTOs(results[0]),
                    total:results[1],
                    offset: filter.pagination.offset,
                    limit: filter.pagination.limit
                }
            })
        })
    }
    
    static createRecorrido(req, res, next) {
        let recorridoDTO = new RecorridoDTO()
        recorridoDTO.hydrate(req.body)
        RecorridoController.resolve(next, RecorridoService.save(RecorridoAssembler.fromDTO(recorridoDTO)), recorrido => {
                res.status(201).send({
                    data: RecorridoAssembler.toDTO(recorrido)
                })
            })
    }
    
    static updateRecorrido(req, res, next) {
        let id = req.params.id
        let recorridoDTO = new RecorridoDTO()
        recorridoDTO.hydrate(req.body)
        RecorridoController.resolve(next, RecorridoService.update(id, RecorridoAssembler.fromDTO(recorridoDTO)), recorrido => {
                res.status(200).send({
                    data: RecorridoAssembler.toDTO(recorrido)
                })
            })
    }
    
    static deleteRecorrido(req, res, next) {
        let id = req.params.id
        RecorridoController.resolve(next, RecorridoService.delete(id), message => {
                res.status(200).send({
                    data: message
                })
            })
    }
}

module.exports = RecorridoController