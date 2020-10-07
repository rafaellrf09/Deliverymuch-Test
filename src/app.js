require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');


class App {
  constructor(){
    this.app = express();
    this.routes();
    this.middlewares();
  }

  routes(){
    this.app.use(routes);
  }

  middlewares() {
    this.app.use(bodyParser.json());
  }
}

module.exports = new App().app;