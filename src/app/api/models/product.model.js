const router = require('express').Router;
const mongo = require('mongodb')
const mongoClient = mongo.MongoClient

const route = router();



const myDbUrl = "mongodb+srv://admin:123@cluster0.etg0u.mongodb.net/test?retryWrites=true&w=majority";


route.post('', (req, res, next) => {
    const postData = {
        email: req.body.email,
        pwd: req.body.pwd
    }
    console.log(postData);
    mongo.connect(myDbUrl).collection('products')
        .insertOne(postData)
        .then(results => {
            console.log(results)
        }).catch(err => {
            console.log(err)
        })

})


module.exports=router;

