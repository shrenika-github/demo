var other=function(a,b)
{
	return a+b;
}
module.exports=other;

var http=require('http');
var page="<h1>Hello</h1><input type='text'/><br/><input type='text'/><br><input type='text'/><br>";
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':"text/html"});
	res.write("<input type='text'/>");
	res.write(page);
	res.end();
}).listen(5000)