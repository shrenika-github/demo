var http=require('http');
var page="<center><h1>Login</h1><br/>Email ID<input type='text'/><br/><br/>Password<input type='password'/><br/><br><input type='submit'/><br/><br/></center>";
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':"text/html"});
	res.write("<label>Email</label><input type='text'/><br/><br/>");
    res.write("<label>Password</label><input type='password'/><br/><br/>");
	res.write("<input type='submit' name='Login'/><br/><br/>");
    res.write(page);
	res.end();
}).listen(5000)