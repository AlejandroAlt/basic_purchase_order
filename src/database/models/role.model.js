const {Model, DataTypes} = require('sequelize');

const ROLE_TABLE = 'user_roles';

const roleModel = {
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
    },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
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

module.exports = {ROLE_TABLE, roleModel, Role};