const path = require('path');

const OrdersService = require('./../services/orders.services');
const service = new OrdersService();

class OrdersController {
    constructor() {}

    async getAll(req, res){
        try{
            const orders = await service.find();
            return res.status(200).json({statusCode:200, orders});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async getById(req, res){
        try{
            const {id} = req.params;
            const order = await service.findOne(id);
            return res.status(200).json({statusCode:200, order});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async create(req, res){
        try{
            const body = req.body;
            const newOrder = await service.create(body);
            return res.status(201).json({statusCode:201, newOrder});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async update(req, res){
        try{
            const {id} = req.params;
            const body = req.body;
            const order = await service.update(id, body);
            return res.status(200).json({statusCode:200, order});
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

module.exports = OrdersController;