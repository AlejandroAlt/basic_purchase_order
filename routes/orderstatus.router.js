const express = require ('express');

const OrderStatusService = require('./../services/orderstatus.services');

const router = express.Router();
const service = new OrderStatusService();

router.get('/', async(req, res, next) => {
    try{
        const orderstatus = await service.find();
        res.json(orderstatus);
    }catch{
        next(error);
    }
});
router.get('/:id', (req,res) => {
    const {id} = req.params;
    const status = service.findOne(id);
    res.json(status);
});

router.post('/', (req, res) => {
    const body = req.body;
    const newOrderStatus = service.create(body);
    res.status(201).json(newOrderStatus);
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;
    const status = service.update(id, body);
    res.json(status);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const rta = service.delete(id);
    res.json(rta);
});

module.exports = router; 