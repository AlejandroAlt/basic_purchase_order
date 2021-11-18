const express = require ('express');
const router = express.Router();

const OrderStatusController = require('./../controllers/orderstatus.controller');
const controller = new OrderStatusController();

router.route ('/').get(controller.getAll);
router.route('/:id').get(controller.getById);
router.route('/').post(controller.create);
router.route('/:id').patch(controller.update);
router.route('/:id').delete(controller.remove);

module.exports = router; 