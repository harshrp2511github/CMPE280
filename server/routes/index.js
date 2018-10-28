var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://admin:admin12345@ds035806.mlab.com:35806/cmpe280';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.post('/page1', function(req, res, next) {


    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db('cmpe280');
        db.collection('persons').insertOne(
                    {
                        pno: req.body.pno,
                        f_name: req.body.f_name,
                        l_name: req.body.l_name,
                        age: req.body.age,
                        gender: req.body.gender,
                        notes: req.body.notes,

                    }
                )

        client.close();
    });
});

router.post('/page2', function(req, res, next) {


    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db('cmpe280');
        var myquery = { pno: req.body.pno };
        var newvalues = { $set: {
                height:req.body.height,
                weight: req.body.weight,
                bt: req.body.bt,
                pr: req.body.pr,
                bp: req.body.bp,
            } };

        db.collection('persons').updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            //db.close();
        });

        client.close();
    });

});

router.get('/page3', function(req, res, next) {


    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db('cmpe280');
        db.collection("persons").find({}).toArray(function(error, results, field) {
            if (error) {
                // console.log("error ocurred",error);
                res.status(401).json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                console.log(results);
                if (results.length > 0) {
                    res.status(201).json({
                        status: 'true',
                        results: results

                    })
                }
                else {
                    res.status(401).json({
                        status: 'false',
                        message: 'User not available'
                    });
                }
            }
        });

        client.close();
    });
});


module.exports = router;
