const express = require('express');
const cors = require('cors');

let app = express();

app.use(cors);
app.use(express.json());

app.set('port', 3000);

require('./server')(app);

module.exports = app;
