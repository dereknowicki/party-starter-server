var express = require('express');
var router = express.Router();
var mysql = require('../models/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a a resource');
});

// select return an array of object, so use row[x].coloum
router.get('/all', function (req, res, next) {
    mysql.getConnection(function (err, conn) {
        if (err) throw err;//so bad
        conn.query("SELECT * FROM user", function (eerr, rows) {
            res.send(rows);
        });
    });
});

// insert user ( u_name, u_passwoed, u_email, u_dob, u_gender )
router.get('/ins', function (req, res, next) {
    var name = req.cookies.u_name
    var pass = req.cookies.u_password
    var mail = req.cookies.u_email
    var dob = req.cookies.u_dob
    var gender = req.cookies.u_gender
    mysql.getConnection(function (err, conn) {
        if (err) throw err;//so bad
        conn.query("INSERT INTO `sampledb`.`user` (`u_name`,`u_password`,`u_email`,`u_dob`,`u_gender`) "
            + "VALUES ('" + name + "','" + pass + "','" + mail + "','" + dob + "','" + gender + "');", function (eerr, rows) {
            //console.log('see insert err: ' , eerr)
            if (eerr) throw eerr; //insert err
            res.send(rows);
        });
    });
});

// login with (u_name, u_password ) return (Authentication)
router.get('/login', function (req, res, next) {
    var name = req.cookies.u_name
    var pass = req.cookies.u_password
    //console.log("this is input: " + name + " && " + pass)
    mysql.getConnection(function (err, conn) {
        if (err) throw err;//so bad
        conn.query("SELECT `u_name`,`u_password` FROM `sampledb`.`user` WHERE `u_name` = '" + name + "';", function (eerr, rows) {
            if (eerr) throw eerr; //select err

            if (rows.length <= 0)
            {
                return res.cookie('Authentication', false).send('user not exist');
            }
            
            for (var i = 0; i < rows.length; i++) {
                if(rows[i].u_password == pass && rows[i].u_name == name)
                {
                    return res.cookie('Authentication', true).send('valid');
                }
            }
            return res.cookie('Authentication', false).send('password or username incorrect');
            //res.send(rows);
        });
    });
});



module.exports = router;
