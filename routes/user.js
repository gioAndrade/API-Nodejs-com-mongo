'use strict'

module.exports = app => {

    let controller = require('../controllers/user')()

    app.post('/user', controller.post);
    app.get('/user', controller.get);

}