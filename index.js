const express = require('express');

const passport = require('passport');
const routerApi = require('./src/api/routes');
const { authMiddleware } = require('./src/api/middlewares/auth.middleware')

const app = express();
const port = 3000;

app.use(express.json());

app.use(passport.initialize());

require('./src/api/session');

app.use((req, res, next) => {
    //if (req.url.indexOf('/app') === -1) return next();
    return authMiddleware(req, res, next);
});

app.use((req, res, next) => {
    if (!req.url.indexOf('/auth/login')){
      return next();
    }

    return passport.authenticate('jwt', {session: false,})(req, res, next);
  });

routerApi(app);

app.listen(port,() => {
    console.log('My port: ' + port);
});