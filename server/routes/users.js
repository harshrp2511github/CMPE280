var express = require('express');
var router = express.Router();
var db = require('./database/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/page1', function(req, res, next) {
    var users={

        "pno":req.body.pno,
        "f_name": req.body.f_name,
        "l_name": req.body.l_name,
        "age": req.body.age,
        "gender": req.body.gender,
        "notes": req.body.notes,

    }
    console.log(users);
    db.getConnection(function(err, connection) {
        db.query('INSERT INTO persons SET ?', users, function (error, results, fields) {
            //db.release();
            console.log(error);
            if (error) {
                res.status(401).json({
                    status: 'false',
                    message: 'Error setting profile'
                })
            } else {
                res.status(201).json({
                    status: 'true',
                    data: results,
                    message: 'Profile successfully set'
                })
            }
        });
    });
});

router.post('/page2', function(req, res, next) {
    var pno = req.body.pno;
    var users={

        "height":req.body.height,
        "weight": req.body.weight,
        "bt": req.body.bt,
        "pr": req.body.pr,
        "bp": req.body.bp,


    }
    console.log(users);
    db.getConnection(function(err, connection) {
        db.query('UPDATE persons SET ? WHERE pno=?', [users,pno], function (error, results, fields) {
            //db.release();
            console.log(error);
            if (error) {
                res.status(401).json({
                    status: 'false',
                    message: 'Error setting profile'
                })
            } else {
                res.status(201).json({
                    status: 'true',
                    data: results,
                    message: 'Profile successfully set'
                })
            }
        });
    });
});

router.get('/page3', function(req, res, next) {

    //var pno= req.body.pno;
    db.getConnection(function(err, connection) {
        db.query('SELECT * FROM persons',  function (error, results, fields) {
            //connection.release();
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
    });
});


module.exports = router;
