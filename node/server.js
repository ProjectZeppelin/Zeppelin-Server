const app = require('./Rest');
const mongoose = require('mongoose');
const db = require('./db');
const env = require('./environment');


// create mongoose schema
const MenuSchema = new mongoose.Schema({
    title: String,
    url: String,
    children: []
}, {
    collection: 'menu'
});

// create mongoose model
const Menu = mongoose.model('menu', MenuSchema);
setTimeout(() => {
    db.init(() => {
        db.saveObjectInCollection(env.data.language1, "menu");

        db.saveObjectInCollection(env.data.language2, "menu");

        db.getCollection('menu');
        db.getCollectionData('menu');
    });
}, env.data.timeout);