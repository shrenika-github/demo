var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':"text/html"});
	res.write("FullName<input type='text'/><br/><br/>");
	res.write("Address :<input type='text'/><br/><br/>");
    res.write("EmailID:<input type='email'/><br/><br/>");
    res.write("Mobile  :<input type='text'/><br/><br/>");
	res.write("<input type='submit'/><br/><br/>");
	res.end();
}).listen(5000)