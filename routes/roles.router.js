const express = require ('express');

const RolesService = require('./../services/roles.services');

const router = express.Router();
const service = new RolesService();

router.get('/', async(req, res, next) => {
    try{
        const roles = await service.find();
        res.json(roles);
    }catch{
        next(error);
    }
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    const role = service.findOne(id);
    res.json(role);
});

router.post('/', (req, res) => {
    const body = req.body;
    const newRole = service.create(body);
    res.status(201).json(newRole);
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;
    const role = service.update(id, body);
    res.json(role);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const rta = service.delete(id);
    res.json(rta);
});

module.exports = router; 