const path = require('path');

const OrderStatusService = require('./../services/orderstatus.services');
const service = new OrderStatusService();

class OrderStatusController {
    constructor() {}

    async getAll(req, res){
        try{
            const orderstatus = await service.find();
            return res.status(200).json({statusCode:200, orderstatus});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async getById(req, res){
        try{
            const {id} = req.params;
            const orderstatus = await service.findOne(id);
            return res.status(200).json({statusCode:200, orderstatus});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async create(req, res){
        try{
            const body = req.body;
            const newOrderStatus = await service.create(body);
            return res.status(201).json({statusCode:201, newOrderStatus});
        } catch (error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async update(req, res){
        try{
            const {id} = req.params;
            const body = req.body;
            const orderstatus = await service.update(id, body);
            return res.status(200).json({statusCode:200, orderstatus});
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

module.exports = OrderStatusController;