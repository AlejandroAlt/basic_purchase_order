const express = require ('express');
const router = express.Router();

const { checkRoles } = require('../middlewares/checkRoles.middleware')
const usersController = require('./../controllers/users.controller');
const controller = new usersController();

router.route ('/').get(
    checkRoles,
    controller.getAll);

router.route('/:id').get(
    checkRoles,
    controller.getById);

router.route('/').post(
    checkRoles,
    controller.create);

router.route('/:id').patch(
    checkRoles,
    controller.update);

router.route('/:id').delete(
    checkRoles,
    controller.remove);

module.exports = router;