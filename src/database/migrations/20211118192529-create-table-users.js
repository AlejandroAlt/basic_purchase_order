'use strict';

const { USER_TABLE, userModel } = require("../models/user.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return await queryInterface.createTable(USER_TABLE,userModel);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable(USER_TABLE);
  }
};