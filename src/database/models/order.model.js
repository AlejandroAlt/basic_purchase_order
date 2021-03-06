const {Model, DataTypes} = require('sequelize');

const ORDER_TABLE = 'purchase_orders';

const orderModel = {
    poId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'po_id'
    },
    poDescription: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'po_description'
    },
    poTotal: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'po_total',
        defaultValue: 0
    },
    poSubTotal: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'po_subtotal',
        defaultValue: 0
    },
    poIva: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'po_iva',
        defaultValue: 0
    },
    posId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'pos_id',
        defaultValue: 1
    },
    usrId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'usr_id',
        defaultValue: 0
    },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
}

class Order extends Model {
    static associate() {
        //associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: true
        }
    }
}

module.exports = {ORDER_TABLE, orderModel, Order};