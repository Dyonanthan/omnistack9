const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

const DB_NAME = 'semana09';
const DB_USER = 'omnistack';
const DB_PASSWORD = 'galinha123';

mongoose.connect('mongodb+srv://'+ DB_USER + ':' + DB_PASSWORD + '@omnistack-gblye.mongodb.net/' + DB_NAME + '?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// GET, POST , PUT , DELETE

//req.query = Acessar query params GET eg: index?id=1
//req.params = Acessar route para edição  PUT, DELETE
//req.body = Acessar corpo da requisão (para criação, edição )

app.use(express.json()); // define a response como jSON
app.use(routes);

app.listen(3333);
