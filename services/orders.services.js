const faker = require('faker');

const {models} = require('../libs/sequelize');

class OrdersService{

    constructor(){
        this.orders = [];
        this.generate();
    }

    generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.orders.push({
                id: faker.datatype.uuid(),
                description: faker.commerce.productDescription(),
                total: parseInt(faker.commerce.price(), 10),
                subtotal: parseInt(faker.commerce.price(), 10),
                iva: 1,
                statusId: 1,
                usrid: faker.datatype.uuid()
            })
        }
    }
    create(data){
        const newOrder = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.orders.push(newOrder);
        return newOrder;
    }

    async find(){
        const rta = await models.Order.findAll();
        return rta;
    }

    findOne(id){
        return this.orders.find(item => item.id === id);
    }

    update(id,changes){
        const index = this.orders.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Order not found')
        }
        const order = this.orders[index];
        this.orders[index] = {
            ...order,
            ...changes
        };
        return this.orders[index];
    }

    delete(id){
        const index = this.orders.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('order not found')
        }
        this.orders.splice(index, 1);
        return {id};
    }
}

module.exports = OrdersService;