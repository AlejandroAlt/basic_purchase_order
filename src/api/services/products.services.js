const path = require('path');

const {models} = require(path.join(
    process.cwd(),
    '/common/config/database/configuration'
    ));

class ProductsService{
    constructor() {}

    async create(data){
        const newProduct = await models.Product.create(data);
        return newProduct;
    }

    async find(){
        const rta = await models.Product.findAll();
        return rta;
    }

    async findOne(id){
        const product = await models.Product.findByPk(id);
        return product;
    }

    async update(id, changes){
        const product = await this.findOne(id);
        const rta = await product.update(changes);
        return rta;
    }

    async delete(id){
        const product = await this.findOne(id);
        await product.destroy();
        return {id};
    }
}

module.exports = ProductsService;