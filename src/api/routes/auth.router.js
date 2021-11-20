const env = process.env.NODE_ENV || 'development';
const express = require ('express');
const passport = require ('passport');
const jwt = require('jsonwebtoken');
const path = require('path');
const configJwt = require(path.join(
    process.cwd(),
    `/common/config/environments/${env}.config.json`
  )).JwtSecret;

const router = express.Router();

router.post('/login',
    passport.authenticate('local', { session: false }),
    async (req, res, next) => {
        try {
            const user = req.user;
            const payload = {
                sub: user.id,
                role: user.role
            }
            const token = jwt.sign(payload, configJwt.secret);
            res.json({
                user,
                token
            });
        } catch (error) {
            next(error)
        }
    }
);

module.exports = router; 