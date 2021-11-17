const path = require('path');

const {models} = require(path.join(
    process.cwd(),
    '/common/config/database/configuration'
    ));

class OrdersService{
    constructor() {}

    async create(data){
        const newOrder = await models.Order.create(data);
        return newOrder;
    }

    async find(){
        const rta = await models.Order.findAll();
        return rta;
    }

    async findOne(id){
        const order = await models.Order.findByPk(id);
        return order;
    }

    async update(id, changes){
        const order = await this.findOne(id);
        const rta = await order.update(changes);
        return rta;
    }

    async delete(id){
        const order = await this.findOne(id);
        await order.destroy();
        return {id};
    }
}

module.exports = OrdersService;