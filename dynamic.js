const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get("/profile/:name",function(req,res)
{
	console.warn(req.params.name)
	res.render('profile');
})
app.listen(5000);
