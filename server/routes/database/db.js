var mysql = require('mysql');

var db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'mytable1',
    queueLimit : 0, // unlimited queueing
    connectionLimit : 10 // unlimited connections
});


module.exports = db;