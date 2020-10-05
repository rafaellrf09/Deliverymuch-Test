require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');


const app = express();


app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.APP_PORT);
console.log(`Sevidor iniciado na porta ${process.env.APP_PORT}`);