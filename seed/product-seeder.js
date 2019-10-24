const Product = require('../models/product');
const mongoose = require('mongoose');

//mongoose.connect('connect to your db');

mongoose.connect('mongodb://localhost:27017/mongoShopping', {
    useNewUrlParser: true
});
const Schema = mongoose.Schema;


const products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Nike_Air_Jordan_XVII.jpg',
        title: 'Nike Air Jordan XVII',
        description: '322,717-061 black/varsity red Air Jordans',
        price: 110
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Air_Jordan_XX1.jpg',
        title: 'Air Jordan 21 Retro & OG',
        description: 'Pure Money White/Metallic Silver Shoes 304775-120',
        price: 120
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Nike_Air_Jordan_XIV.jpg',
        title: 'Jordan 14 Retro Black Toe',
        description: 'Atmosphere Grey colorway. ',
        price: 160
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Nike_Air_Jordan_X_Steel.jpg',
        title: 'The Steel Air Jordan 10',
        description: 'The OG Colorway',
        price: 115
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Jordan_II.jpg',
        title: 'Air Jordan 2 Retro & OG',
        description: 'Son Of Mars Schuhe BlackGreyRed',
        price: 170
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Nike_Air_Jordan_IX.jpg',
        title: 'Jordan 9 Retro OG',
        description: 'Yellow Reverse Ferrari University Gold',
        price: 170
    })
];
let done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}