const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const ordersRouter = require('./orders.router');
const rolesRouter = require('./roles.router');
const orderstatusRouter = require('./orderstatus.router');
const authRouter = require('./auth.router');

function routerApi(app)
{
    app.use('/products', productsRouter);
    app.use('/users', usersRouter);
    app.use('/orders', ordersRouter);
    app.use('/roles', rolesRouter);
    app.use('/orderstatus', orderstatusRouter);
    app.use('/auth', authRouter);
}

module.exports = routerApi;