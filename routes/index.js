const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Olivia Cantwell')
});

module.exports = routes;
