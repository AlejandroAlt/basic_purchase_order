const {User, userModel } = require('./user.model');
const {Product, productModel } = require('./product.model');
const {Order, orderModel } = require('./order.model');
const {Role, roleModel } = require('./role.model');
const {OrderStatus, orderStatusModel } = require('./orderstatus.model');

function initialModels(sequelize){
    User.init(userModel, User.config(sequelize));
    Product.init(productModel, Product.config(sequelize));
    Order.init(orderModel, Order.config(sequelize));
    Role.init(roleModel, Role.config(sequelize));
    OrderStatus.init(orderStatusModel, OrderStatus.config(sequelize));
}

module.exports = initialModels;