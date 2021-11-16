const {Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCT_TABLE = 'products';

const productSchema = {
    prtId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'prt_id'
    },
    prtName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'prt_name'
    },
    prtDescription: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'prt_description'
    },
    prtPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'prt_price',
        defaultValue: 2
    },
    prtIsActive: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'prt_is_active',
        defaultValue: 1
    }
}

class Product extends Model {
    static associate() {
        //associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = {PRODUCT_TABLE, productSchema, Product};