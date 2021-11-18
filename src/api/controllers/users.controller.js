const path = require('path');

const usersService = require('./../services/users.services');
const service = new usersService();

class UsersController {
    constructor() {}

    async getAll(req, res){
        try{
            const users = await service.find();
            return res.status(200).json({statusCode:200, users});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async getById(req, res){
        try{
            const {id} = req.params;
            const user = await service.findOne(id);
            return res.status(200).json({statusCode:200, user});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async create(req, res){
        try{
            const body = req.body;
            const newUser = await service.create(body);
            return res.status(201).json({statusCode:201, newUser});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async update(req, res){
        try{
            const {id} = req.params;
            const body = req.body;
            const user = await service.update(id, body);
            return res.status(200).json({statusCode:200, user});
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

module.exports = UsersController;