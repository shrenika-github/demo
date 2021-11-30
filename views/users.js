var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/registration', function(req, res, next) {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.description);
    con.connect(function(err) {
  if (err) throw  err;
  console.log("connected");
  var sql = "INSERT INTO `users` VALUES (null,'"+req.body.fullname+"','"+req.body.address+"','"+req.body.mobile+"','"+req.body.email+"','"+req.body.password+"')";
  con.query(sql, function(err, result)  {
   if(err) throw err;
   console.log("Inserted...!!!");
  });
});

  res.render('login', { title: 'Express' });
});


module.exports = router;