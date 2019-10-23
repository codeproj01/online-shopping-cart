const Product = require('../models/product');
const mongoose = require('mongoose');
//mongoose.connect('connect to your db');

mongoose.connect('mongodb://localhost:27017/mongoShopping', {
    useNewUrlParser: true
});
const Schema = mongoose.Schema;


const products = [
    new Product({
        imagePath: './node.js-shopping-cart/views/images/jordans1/jpg',
        title: 'Air Jordan 21 Retro CDP',
        description: '322,717-061 black/varsity red Air Jordans',
        price: 110
    }),
    new Product({
        imagePath: '../jordan2.jpg',
        title: 'Nike Air Jordan 7 Retro ',
        description: 'Pure Money White/Metallic Silver Shoes 304775-120',
        price: 120
    }),
    new Product({
        imagePath: './images/jordan3.jpg',
        title: 'Air Jordan 13',
        description: 'Atmosphere Grey colorway. ',
        price: 160
    }),
    new Product({
        imagePath: './images/jordan4.jpg',
        title: 'Air Jordan Retro 1 ',
        description: 'BMP yellow black aka,jordan space jams ',
        price: 115
    }),
    new Product({
        imagePath: './images/jordan5.jpg',
        title: 'Nike Air Jordan 21 ',
        description: 'Son Of Mars Schuhe BlackGreyRed',
        price: 170
    }),
    new Product({
        imagePath: './images/jordan6.jpg',
        title: 'Air Jordan Retro 14 SE ',
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