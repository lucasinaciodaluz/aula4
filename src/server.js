const express = require('express');
const routes = require('./routes');

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // diz que será usado JSON nas rotas
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}
// expoe para as outras classes
module.exports = new App().express;
