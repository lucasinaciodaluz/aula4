const express = require('express');
const UserController = require('./app/controllers/UserController');
const ProductController = require('./app/controllers/ProductController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Server up!');
});

routes.get('/products', ProductController.list);
routes.post('/products', ProductController.create);

routes.get('/users', UserController.list);
routes.post('/users', UserController.create);

module.exports = routes;
