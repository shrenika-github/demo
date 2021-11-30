const express=require('express');
const app=express();
const router=express.Router();
const path=require('path');
app.set('view engine','ejs');
require("./views/data");
//built-in middleware
app.use('/views', express.static('views'));

//var bodyParser=require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//var encoder=bodyParser.urlencoded();
const checkUrl=function(req,res,next)
{
	console.warn("cnurrent route is",req.originalUrl)
	next();
}
app.use(checkUrl);
app.post('/registration',function(req,res){
	console.warn(req.body)
    res.render("registration.ejs")
});
app.get('/login',function(req,res){
	res.render("login.ejs");
})
app.post('/login',function(req,res){
	console.log(req.body);
	var username = req.body.username;
    var password = req.body.password;
	console.warn('Name:'+username+'password:'+password)
    res.render("login.ejs")
});
app.get('/registration',function(req,res){
    res.render("registration.ejs")
});
router.get('/demo',function(req,res){
    res.send("Hello Express middleware")
});
app.get('/',function(req,res){
    res.sendFile(__dirname+"/other.js")
});
app.post('/',function(req,res){
	res.send("Hello Express post")
});
app.put('/registration',function(req,res){
	res.send("Hello Express put")
});
app.delete('/login',function(req,res){
	res.send("Hello Express delete")
});
app.use('/',router);
app.listen(5000);
