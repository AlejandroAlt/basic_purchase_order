const {Model, DataTypes, Sequelize} = require('sequelize');

const ORDER_STATUS_TABLE = 'purchase_order_status';

const orderStatusSchema = {
    posId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'pos_id'
    },
    posName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'pos_name'
    }
}

class OrderStatus extends Model {
    static associate() {
        //associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: ORDER_STATUS_TABLE,
            modelName: 'OrderStatus',
            timestamps: false
        }
    }
}

module.exports = {ORDER_STATUS_TABLE, orderStatusSchema, OrderStatus};