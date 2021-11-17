const {User, userSchema } = require('./user.model');
const {Product, productSchema } = require('./product.model');
const {Order, orderSchema } = require('./order.model');
const {Role, roleSchema } = require('./role.model');
const {OrderStatus, orderStatusSchema } = require('./orderstatus.model');

function initialModels(sequelize){
    User.init(userSchema, User.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
    Order.init(orderSchema, Order.config(sequelize));
    Role.init(roleSchema, Role.config(sequelize));
    OrderStatus.init(orderStatusSchema, OrderStatus.config(sequelize));
}

module.exports = initialModels;