const env = process.env.NODE_ENV || 'development';
const path = require('path');
const { Strategy, ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcrypt');
const configJwt = require(path.join(
    process.cwd(),
    `/common/config/environments/${env}.config.json`
  )).JwtSecret;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: configJwt.secret
}

const JwtStrategy = new Strategy(options, (payload,done) =>{
    return done(null, payload);
});


module.exports = JwtStrategy;