const express = require ('express');
const router = express.Router();

const OrdersController = require('./../controllers/orders.controller');
const controller = new OrdersController();

router.route ('/').get(controller.getAll);
router.route('/:id').get(controller.getById);
router.route('/').post(controller.create);
router.route('/:id').patch(controller.update);
router.route('/:id').delete(controller.remove);

module.exports = router; 