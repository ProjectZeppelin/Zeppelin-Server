const app = require('./Rest');
const mongoose = require('mongoose');
const db = require('./db');


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
        db.saveObjectInCollection({
            title: "Language 1",
            url: "/get/lan1",
            children: [{
                    title: "part 1",
                    url: "/get/lan1/part1",
                    children: []
                },
                {
                    title: "part 2",
                    url: "/get/lan1/part2",
                    children: []
                },
                {
                    title: "part 3",
                    url: "/get/lan1/part3",
                    children: []
                },
            ]
        }, "menu");

        db.saveObjectInCollection({
            title: "Language 2",
            url: "/get/lan2",
            children: [{
                    title: "part 1",
                    url: "/get/lan2/part1",
                    children: []
                },
                {
                    title: "part 2",
                    url: "/get/lan2/part2",
                    children: []
                },
                {
                    title: "part 3",
                    url: "/get/lan3/part3",
                    children: [{
                            title: "part 3 section 1",
                            url: "/get/lan2/part3/section1",
                            children: []
                        },
                        {
                            title: "part 3 section 2",
                            url: "/get/lan2/part3/section2",
                            children: []
                        },
                    ]
                },
            ]
        }, "menu");

        db.getCollection('menu');
        db.getCollectionData('menu');
    });
}, 5000);