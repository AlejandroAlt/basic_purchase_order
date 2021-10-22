const {Model, DataTypes, Sequelize} = require('sequelize');

const ROLE_TABLE = 'user_roles';

const roleSchema = {
    rolId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'rol_id'
    },
    rolName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'rol_name'
    }
}

class Role extends Model {
    static associate() {
        //associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: ROLE_TABLE,
            modelName: 'Role',
            timestamps: false
        }
    }
}

module.exports = {ROLE_TABLE, roleSchema, Role};