const express = require ('express');

const OrdersService = require('./../services/orders.services');

const router = express.Router();
const service = new OrdersService();

router.get('/', async(req, res, next) => {
    try{
        const orders = await service.find();
        res.json(orders);
    }catch{
        next(error);
    }
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    const order = service.findOne(id);
    res.json(order);
});

router.post('/', (req, res) => {
    const body = req.body;
    const newOrder = service.create(body);
    res.status(201).json(newOrder);
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;
    const order = service.update(id, body);
    res.json(order);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const rta = service.delete(id);
    res.json(rta);
});

module.exports = router; 