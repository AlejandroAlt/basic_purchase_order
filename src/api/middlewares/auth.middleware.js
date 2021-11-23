const env = process.env.NODE_ENV || 'development';
const path = require('path');
const jwt = require('jsonwebtoken');
const configJwt = require(path.join(
    process.cwd(),
    `/common/config/environments/${env}.config.json`
  )).JwtSecret;

function authMiddleware(req, res, next){
    try {
        if (!req.headers.authorization && req.url !== '/auth/login') {
            return res.status(401).json({
              statusCode: 401,
              message: 'Favor de iniciar sesión',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
            error: error.stack,
        });
    }
}

module.exports = { authMiddleware }