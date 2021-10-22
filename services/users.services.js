const faker = require('faker');

const {models} = require('../libs/sequelize');

class UsersService{

    constructor(){
        this.users = [];
        this.generate();
    }

    generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.internet.userName(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                active: 1,
                rolId: 1
            })
        }
    }

    create(data){
        const newUser = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.users.push(newUser);
        return newUser;
    }

    async find(){
        const query = 'Select now()';
        const rta = await models.User.findAll();
        return rta;
    }

    findOne(id){
        return this.users.find(item => item.id === id);
    }

    update(id,changes){
        const index = this.users.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('user not found')
        }
        const user = this.users[index];
        this.users[index] = {
            ...user,
            ...changes
        };
        return this.users[index];
    }

    delete(id){
        const index = this.users.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('user not found')
        }
        this.users.splice(index, 1);
        return {id};
    }
}

module.exports = UsersService;