const path = require('path');

const RolesService = require('./../services/roles.services');
const service = new RolesService();

class RolesController {
    constructor() {}

    async getAll(req, res){
        try{
            const roles = await service.find();
            return res.status(200).json({statusCode:200, roles});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async getById(req, res){
        try{
            const {id} = req.params;
            const role = await service.findOne(id);
            return res.status(200).json({statusCode:200, role});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async create(req, res){
        try{
            const body = req.body;
            const newRole = await service.create(body);
            return res.status(201).json({statusCode:201, newRole});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async update(req, res){
        try{
            const {id} = req.params;
            const body = req.body;
            const role = await service.update(id, body);
            return res.status(200).json({statusCode:200, role});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async remove(req, res){
        try{
            const {id} = req.params;
            await service.delete(id);
            return res.status(201).json({statusCode:201, id});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }
}

module.exports = RolesController;