const faker = require('faker');

class RolesService{

    constructor(){
        this.roles = [];
        this.generate();
    }

    generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.roles.push({
                id: faker.datatype.uuid(),
                name: 'Administrator'
            })
        }
    }
    create(data){
        const newRole = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.roles.push(newRole);
        return newRole;
    }

    find(){
        return this.roles;
    }

    findOne(id){
        return this.roles.find(item => item.id === id);
    }

    update(id,changes){
        const index = this.roles.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Role not found')
        }
        const role = this.roles[index];
        this.roles[index] = {
            ...role,
            ...changes
        };
        return this.roles[index];
    }

    delete(id){
        const index = this.roles.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Role not found')
        }
        this.roles.splice(index, 1);
        return {id};
    }
}

module.exports = RolesService;