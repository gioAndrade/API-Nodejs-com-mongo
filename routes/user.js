'use strict'

module.exports = app => {

    let controller = require('../controllers/user')()

    app.post("/users",  controller.post);
    app.get("/users",  controller.get);
    app.get("/users/:id",  controller.search);
    app.put("/users/:id",  controller.put);
    app.delete("/users/:id",  controller.delete);

}