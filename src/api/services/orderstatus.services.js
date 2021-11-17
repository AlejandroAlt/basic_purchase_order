const path = require('path');

const {models} = require(path.join(
    process.cwd(),
    '/common/config/database/configuration'
    ));

class OrderStatusService{
    constructor() {}

    async create(data){
        const newOrderStatus = await models.OrderStatus.create(data);
        return newOrderStatus;
    }

    async find(){
        const rat = await models.OrderStatus.findAll();
        return rat;
    }

    async findOne(id){
        const orderstatus = await models.OrderStatus.findByPk(id);
        return orderstatus;
    }

    async update(id,changes){
        const orderstatus = await this.findOne(id);
        const rta = await orderstatus.update(changes);
        return rta;
    }

    async delete(id){
        const orderstatus = await this.findOne(id);
        await orderstatus.destroy();
        return {id};
    }
}

module.exports = OrderStatusService;