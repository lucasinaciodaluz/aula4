const express = require('express');
const UserController = require('./app/controllers/UserController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Server up!');
});

routes.get('/users', UserController.list);
routes.post('/users', UserController.create);

module.exports = routes;
