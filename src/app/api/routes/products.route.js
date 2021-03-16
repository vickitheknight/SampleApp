const mongo = require('mongodb')
const mongoClient = mongo.MongoClient

const express = require('express');
const objId = mongo.ObjectId;

const router = express.Router();

const myDbUrl = "mongodb+srv://admin:123@cluster0.etg0u.mongodb.net/test?retryWrites=true&w=majority";

router.get('/products', (req, res, next) => {
    const prodts = [];
    mongoClient.connect(myDbUrl).then(client => {
        client.db().collection('products')
            .find()
            .sort({ price: -1 })
            // .skip((queryPage-1)*pageSize).limit(pageSize)

            .forEach(elemet => {
                if(elemet.price ){
                elemet.price = elemet.price.toString();}
                console.log("qpage", elemet)
                prodts.push(elemet);
            })
            .then(result => {
                console.log("results", result)
                // clien.close();
                  res.status(200).json(prodts);
            }).catch(errorr => {
                console.log(errorr)
                // clien.close();
                  res.status(400).json({ message: "failed" });
            })
    })
})
router.post('/insert', (req, res, next) => {
    var data = [];
    data={
        emial:req.body.email,
        password:req.body.password
    }
    mongoClient.connect(myDbUrl).then(client => {
        client.db().collection('users')
            .insertOne(data)
            .then(result => {
                console.log("results", result)
                // clien.close();
                  res.status(200).json({ message: "su" ,resCode:200});
            }).catch(errorr => {
                console.log(errorr)
                // clien.close();
                  res.status(400).json({ message: "failed",resCode:400 });
            })
    })
})
router.post('/', (req, res, next) => {
    var data = [];
    data={
        emial:req.body.email,
        password:req.body.password
    }
    mongoClient.connect(myDbUrl).then(client => {
console.log("upload",client)
    })
})
router.post('/addProduct', (req, res, next) => {
    var data = [];
    data={
        name:req.body.productName,
        price:req.body.productPrice,
        description:req.body.productDescription,
        image:req.body.productPath,
        isFav:false
    }
    console.log("data", data)
    mongoClient.connect(myDbUrl).then(client => {
        client.db().collection('products')
        .insertOne(data)
        .then(result => {
            console.log("results", result)
            // clien.close();
              res.status(200).json({ message: "addded" ,resCode:200});
        }).catch(errorr => {
            console.log(errorr)
            // clien.close();
              res.status(400).json({ message: "failed to add",resCode:400 });
        })
    })
})
router.post('/editProduct', (req, res, next) => {
    var data = [];
    data={
        id:req.body.id,
        name:req.body.productName,
        price:req.body.productPrice,
        description:req.body.productDescription,
        image:req.body.productPath,
        isFav:req.body.isFav
    }
    console.log("data", data)
    mongoClient.connect(myDbUrl).then(client => {
        client.db().collection('products')
        .updateOne({ _id: new objId(data.id) },{$set:data})
        .then(result => {
            console.log("results", result)
            // clien.close();
              res.status(200).json({ message: "edited" ,resCode:200});
        }).catch(errorr => {
            console.log(errorr)
            // clien.close();
              res.status(400).json({ message: "failed to add",resCode:400 });
        })
    })
})
router.get('/get/:id', (req, res, next) => {
    console.log("req.params.id",req.params.id)
    const prodts = [];
    mongoClient.connect(myDbUrl).then(client => {
        client.db().collection('products')
      .findOne({ _id: new objId(req.params.id) }).then(prodfind => {
        console.log("prodfind",prodfind);
        prodfind.price = prodfind.price.toString();
        res.status(200).json({ message: "Get" ,resCode:200,results:prodfind});
      }).catch(err => {
        console.log(err)
        res.status(400).json({ message: "failed" });
      })
    })
    // const product = products.find(p => p._id === req.params.id);
    // res.json(product);
  });
module.exports = router;