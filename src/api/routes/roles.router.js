const express = require ('express');

const RolesService = require('./../services/roles.services');

const router = express.Router();
const service = new RolesService();

router.get('/',
    async(req, res, next) => {
    try{
        const roles = await service.find();
        res.json(roles);
    } catch(error) {
        next(error);
    }
});

router.get('/:id',
    async(req, res, next) => {
        try{
            const {id} = req.params;
            const role = await service.findOne(id);
            res.json(role);
        } catch(error) {
            next(error);
        }
});

router.post('/',
    async(req, res, next) => {
        try{
            const body = req.body;
            const newRole = await service.create(body);
            res.status(201).json(newRole);
        } catch(error) {
            next(error);
        }
});

router.patch('/:id',
    async(req, res, next) => {
        try{
            const {id} = req.params;
            const body = req.body;
            const role = await service.update(id, body);
            res.json(role);
        } catch (error) {
            next(error);
        }
});

router.delete('/:id',
    async(req, res, next) => {
        try{
            const {id} = req.params;
            await service.delete(id);
            res.status(201).json({id});
        } catch(error) {
            next(error);
        }
});

module.exports = router; 