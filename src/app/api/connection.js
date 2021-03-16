const mongo = require('mongodb')
const mongoClient = mongo.MongoClient
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');


const getProduct = require('./models/product.model');
const getRouteProduct = require('./routes/products.route');
const apps = express();
apps.use(bodyParser.json());
apps.use(express.static('public'));
const myDbUrl = "mongodb+srv://admin:123@cluster0.etg0u.mongodb.net/test?retryWrites=true&w=majority";

mongo.connect(myDbUrl).then(result => {
    console.log("sucess run db", result)
})
    .catch(err => {
        console.log(err)

    })
apps.use((req, res, next) => {
    // Set CORS headers so that the React SPA is able to communicate with this server
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,PUT,PATCH,DELETE,OPTIONS'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
apps.listen(3100);
apps.use('/', getRouteProduct);
apps.use('/images', express.static(path.join(__dirname + 'images')));
// apps.use('/images', express.static(path.join('api/images')));


