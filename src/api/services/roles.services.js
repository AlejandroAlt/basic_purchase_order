const {models} = require('../../../libs/sequelize');

class RolesService{
    constructor() {}

    async create(data){
        const newRole = await models.Role.create(data);
        return newRole;
    }

    async find(){
        const rta = await models.Role.findAll();
        return rta;
    }

    async findOne(id){
        const role = await models.Role.findByPk(id);
        return role;
    }

    async update(id, changes){
        const role = await this.findOne(id);
        const rta = await role.update(changes);
        return rta;
    }

    async delete(id){
        const role = await this.findOne(id);
        await role.destroy();
        return {id};
    }
}

module.exports = RolesService;