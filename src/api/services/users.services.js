const path = require('path');
const bcrypt = require('bcrypt');

const {models} = require(path.join(
    process.cwd(),
    '/common/config/database/configuration'
    ));

class UsersService{
    constructor() {}

    async create(body){
        const hashPassword = await bcrypt.hash(body.usrPassword,12)
        const newUser = await models.User.create({
            ...body,
            usrPassword: hashPassword
        });
        delete newUser.dataValues.usrPassword;
        return newUser;
    }

    async find(){
        const rta = await models.User.findAll();
        return rta;
    }

    async findOne(id){
        const user = await models.User.findByPk(id);
        return user;
    }

    async findByEmail(usrEmail){
        const user = await models.User.findOne({
            where: {usrEmail}
        });
        return user;
    }

    async update(id, changes){
        const user = await this.findOne(id);
        const rta = await user.update(changes);
        return rta;
    }

    async delete(id){
        const user = await this.findOne(id);
        await user.destroy();
        return {id};
    }
}

module.exports = UsersService;