const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://127.0.0.1:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected Correctly to server.");

    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })  .then((dish) => {
            console.log(dish,"\n");

            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes,"\n");

            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});