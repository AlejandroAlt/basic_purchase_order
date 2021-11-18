const path = require('path');

const productsService = require('./../services/products.services')
const service = new productsService();

class ProductsController {
    constructor(){}

    async getAll(req, res){
        try{
            const products = await service.find();
            return res.status(200).json({statusCode:200, products});
        } catch(error){
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async getById(req, res){
        try{
            const {id} = req.params;
            const product = await service.findOne(id);
            return res.status(200).json({statusCode:200, product});
        } catch(error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async create(req, res){
        try{
            const body = req.body;
            const newProduct = await service.create(body);
            return res.status(201).json({statusCode:201, newProduct});
        } catch(error) {
            return res.status(500).json({statusCode:500, error:error.stack});
        }
    }

    async update(req, res){
        try{
            const {id} = req.params;
            const body = req.body;
            const product = await service.update(id, body);
            return res.status(200).json({statusCode:200, product});
        } catch(error) {
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

module.exports = ProductsController;