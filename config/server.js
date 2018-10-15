module.exports = (app) => {
    const mongoose = require('mongoose');

    let url = 'mongodb://localhost:27017'

    mongoose.connect(url, { useNewUrlParser: true });
}