'use strict';

const { ROLE_TABLE, roleModel } = require('../models/role.model');
const { PRODUCT_TABLE, productModel } = require('../models/product.model');
const { ORDER_TABLE, orderModel } = require('../models/order.model');
const { ORDER_STATUS_TABLE, orderStatusModel } = require('../models/orderstatus.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async t => {
      try {
        await queryInterface.createTable( ROLE_TABLE, roleModel ),
        await queryInterface.createTable( PRODUCT_TABLE, productModel ),
        await queryInterface.createTable( ORDER_TABLE, orderModel ),
        await queryInterface.createTable( ORDER_STATUS_TABLE, orderStatusModel )
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async t => {
      try {
        await queryInterface.dropTable(ROLE_TABLE),
        await queryInterface.dropTable(PRODUCT_TABLE),
        await queryInterface.dropTable(ORDER_TABLE),
        await queryInterface.dropTable(ORDER_STATUS_TABLE)
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    })
  }
};
