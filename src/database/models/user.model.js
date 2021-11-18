const {Model,DataTypes} = require('sequelize');

const USER_TABLE = 'users';

const userModel = {
    usrId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'usr_id'
    },
    usrName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'usr_name'
    },
    usrPhoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'usr_phone_number'
    },
    usrEmail: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'usr_email'
    },
    usrPassword: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'usr_password'
    },
    usrIsActive: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'usr_is_active',
        defaultValue: 1
    },
    rolId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'rol_id',
        defaultValue: 2
    },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
}

class User extends Model {
    static associate() {
        //associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {USER_TABLE, userModel, User};