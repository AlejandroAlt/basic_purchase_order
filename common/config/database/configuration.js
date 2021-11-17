const { join } = require('path');
const path = require('path');
const Sequelize = require('sequelize');
const config = require(path.join(
    process.cwd(),
    '/common/config/database/connection.js'
));
const initialModels = require(path.join(
    process.cwd(), '/src/database/models'
));

const sequelize = new Sequelize (
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle,
        },
        dialectOptions: {
            useUTC: config.dialectOptions.useUTC,
            dateStrings: config.dialectOptions.dateStrings,
            typeCast: config.dialectOptions.typeCast,
        },
        timezone: config.timezone,
    }
);

initialModels(sequelize);

module.exports = sequelize;