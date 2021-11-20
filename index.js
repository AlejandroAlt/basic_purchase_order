const express = require('express');
const passport = require('passport');
const routerApi = require('./src/api/routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(passport.initialize());

require('./src/api/session');

routerApi(app);

app.listen(port,() => {
    console.log('My port: ' + port);
});