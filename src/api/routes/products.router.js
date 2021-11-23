const express = require ('express');
const router = express.Router();

const productsController = require('./../controllers/products.controller');
const controller = new productsController();

router.route ('/').get(
    controller.getAll);
    
router.route('/:id').get(
    controller.getById);

router.route('/').post(
    controller.create);

router.route('/:id').patch(
    controller.update);

router.route('/:id').delete(
    controller.remove);

module.exports = router;