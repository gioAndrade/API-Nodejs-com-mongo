'use strict'

const mongoose = require('mongoose');

let url = 'mongodb://localhost/user';
mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true } );
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error);

db.once('open', function () {
    console.log('Conectado ao banco de dados produtosdb MongoDB.')
});

module.exports = mongoose;
