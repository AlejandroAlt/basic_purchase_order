const faker = require('faker');

class OrderStatusService{

    constructor(){
        this.orderstatus = [];
        this.generate();
    }

    generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.orderstatus.push({
                id: faker.datatype.uuid(),
                name: 'Pagada'
            })
        }
    }
    create(data){
        const newOrderStatus = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.orderstatus.push(newOrderStatus);
        return newOrderStatus;
    }

    find(){
        return this.orderstatus;
    }

    findOne(id){
        return this.orderstatus.find(item => item.id === id);
    }

    update(id,changes){
        const index = this.orderstatus.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Order status not found')
        }
        const status = this.orderstatus[index];
        this.orderstatus[index] = {
            ...status,
            ...changes
        };
        return this.orderstatus[index];
    }

    delete(id){
        const index = this.orderstatus.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('order status not found')
        }
        this.orderstatus.splice(index, 1);
        return {id};
    }
}

module.exports = OrderStatusService;