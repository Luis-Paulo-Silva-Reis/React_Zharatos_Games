'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conectando ao banco de dados 
// mongoose.connect('mongo "mongodb+srv://cluster0.rskuj.mongodb.net/myFirstDatabase" --username zharatos');
mongoose.connect('mongodb+srv://zharatos:mgdhcz8dt@cluster0.rskuj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//carrega models 

const Product = require('./models/product');

//Carrega as Rotas 
const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/", indexRoute);
app.use("/products", productRoute);


module.exports = app;
