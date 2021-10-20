const faker = require('faker');

const sequelize = require('../libs/sequelize');

class ProductsService{

    constructor(){
        this.products = [];
        this.generate();
    }

    generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                active: 1,
                price: parseInt(faker.commerce.price(), 10)
            })
        }
    }
    create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find(){
        const query = 'Select now()';
        const [data] = await sequelize.query(query);
        return data;
    }

    findOne(id){
        return this.products.find(item => item.id === id);
    }

    update(id,changes){
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('product not found')
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    delete(id){
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('product not found')
        }
        this.products.splice(index, 1);
        return {id};
    }
}

module.exports = ProductsService;