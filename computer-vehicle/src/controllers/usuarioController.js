const GenericController = require('./genericController')
const UsuarioService = require('../services/usuarioService')
const UsuarioDTO = require('../dtos/usuarioDTO')
const UsuarioFilter = require('../filters/usuarioFilter')
const UsuarioAssembler = require('../assemblers/usuarioAssembler')

class UsuarioController extends GenericController{

    static getUsuarioById(req, res, next) {
        const id = req.params.id
        UsuarioController.resolve(next, UsuarioService.get(id), usuario => {
            res.status(200).send({
                data: UsuarioAssembler.toDTO(usuario),
            })
        })
    }

    static getUsuarios(req, res, next) {
        const filter = new UsuarioFilter()
        filter.fillData(req.query)
        UsuarioController.resolve(next,
                Promise.all([
                    UsuarioService.find(filter), 
                    UsuarioService.count(filter)
                ]), results => {
            res.status(200).send({
                data: {
                    list: UsuarioAssembler.toDTOs(results[0]),
                    total:results[1],
                    offset: filter.pagination.offset,
                    limit: filter.pagination.limit
                }
            })
        })
    }
    
    static createUsuario(req, res, next) {
        let usuarioDTO = new UsuarioDTO()
        usuarioDTO.hydrate(req.body)
        UsuarioController.resolve(next, UsuarioService.save(UsuarioAssembler.fromDTO(usuarioDTO)), usuario => {
                res.status(201).send({
                    data: UsuarioAssembler.toDTO(usuario)
                })
            })
    }
    
    static updateUsuario(req, res, next) {
        let id = req.params.id
        let usuarioDTO = new UsuarioDTO()
        usuarioDTO.hydrate(req.body)
        UsuarioController.resolve(next, UsuarioService.update(id, UsuarioAssembler.fromDTO(usuarioDTO)), usuario => {
                res.status(200).send({
                    data: UsuarioAssembler.toDTO(usuario)
                })
            })
    }
    
    static deleteUsuario(req, res, next) {
        let id = req.params.id
        UsuarioController.resolve(next, UsuarioService.delete(id), message => {
                res.status(200).send({
                    data: message
                })
            })
    }
}

module.exports = UsuarioController