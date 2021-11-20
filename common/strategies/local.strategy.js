const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');

const usersService = require('../../src/api/services/users.services');
const service = new usersService();

const localStrategy = new Strategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
            const user = await service.findByEmail(email);
            if (!user) {
                return done(null, {
                statusCode: 401,
                message: 'email no encontrado'});
            }

            const isMatch = await bcrypt.compare(password, user.usrPassword);
            if (!isMatch) {
                return done(null, {
                    statusCode: 401,
                    message: 'Credenciales incorrectas'});
            }
            delete user.dataValues.usrPassword;
            done(null, user);

        } catch (error) {
            done(error, false);
        }
});

module.exports = localStrategy;