console.log(1+2);
function test()
{
	console.warn("Hello");
}
test();

var other=require('./other');
console.log(other(10,20));

var http=require('http');
var data={name:"shrenika",age:"24",email:"gugaleshrenika@gmail.com"}
var data1=[{name:"shrenika",age:"24",email:"gugaleshrenika@gmail.com"},
           {name:"shrenika",age:"24",email:"gugaleshrenika@gmail.com"}]
http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'application\json'})
	res.write('{"name":"shrenika"}');
	res.write(JSON.stringify(data));
		res.write(JSON.stringify(data1));

	res.write("Hello NodeJS");
	res.end();
}).listen(5000)

