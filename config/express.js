
'use strict';

let express = require('express');
let cors = require('cors');
'use strict';

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('port', 3000); 

require('./server');
require('../controllers/user')(app);
require('../routes/user')(app);
require('../routes/main')(app);

module.exports = app;
