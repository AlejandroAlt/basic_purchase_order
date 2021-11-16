const express = require ('express');

const OrderStatusService = require('./../services/orderstatus.services');

const router = express.Router();
const service = new OrderStatusService();

router.get('/',
    async(req, res, next) => {
        try{
            const orderstatus = await service.find();
            res.json(orderstatus);
        }catch{
            next(error);
        }
});

router.get('/:id', 
    async(req, res, next) => {
        try{
            const {id} = req.params;
            const orderstatus = await service.findOne(id);
            res.json(orderstatus);
        } catch(error){
            next(error);
        }
});

router.post('/',
    async(req, res, next) => {
        try{
            const body = req.body;
            const newOrderStatus = await service.create(body);
            res.status(201).json(newOrderStatus);
        } catch(error){
            next(error);
        }
});

router.patch('/:id',
    async(req, res, next) => {
        try{
            const {id} = req.params;
            const body = req.body;
            const status = await service.update(id, body);
            res.json(status);
        } catch(error){
            next(error);
        }
});

router.delete('/:id',
    async(req, res, next) => {
        try{
            const {id} = req.params;
            await service.delete(id);
            res.status(201).json({id});
        } catch(error){
            next(error);
        }
});

module.exports = router; 