const {Model, DataTypes} = require('sequelize');

const ORDER_STATUS_TABLE = 'purchase_order_status';

const orderStatusModel = {
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
    },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
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
            timestamps: true
        }
    }
}

module.exports = {ORDER_STATUS_TABLE, orderStatusModel, OrderStatus};