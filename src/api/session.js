const passport = require('passport');

const LocalStrategy = require ('../../common/strategies/local.strategy');
const JwtStrategy = require ('../../common/strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);

module.exports = passport;