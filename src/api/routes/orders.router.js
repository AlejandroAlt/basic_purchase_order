const express = require ('express');
const router = express.Router();
const passport = require ('passport');

const ordersController = require('./../controllers/orders.controller');
const controller = new ordersController();

router.route ('/').get(
    passport.authenticate('jwt', {session: false,}),
    controller.getAll);

router.route('/:id').get(
    passport.authenticate('jwt', {session: false,}),
    controller.getById);

router.route('/').post(
    passport.authenticate('jwt', {session: false,}),
    controller.create);

router.route('/:id').patch(
    passport.authenticate('jwt', {session: false,}),
    controller.update);

router.route('/:id').delete(
    passport.authenticate('jwt', {session: false,}),
    controller.remove);

module.exports = router; 