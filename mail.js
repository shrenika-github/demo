var nodeMailer=require('nodeMailer');
var transport=nodeMailer.createTransport({
	host:'smtp.gmail.com',
	port:587,
	secure:false,
	requireTLS:true,
	auth:{
		user:'webanilsindhu@gmail.com',
		pass:''
	}
});
var mailOptions={
	from:'webanilsindhu@gmail.com',
	to:'webanilsindhu@gmail.com',
	subject:'test node mail',
	text:'Hello please sub channel'
}
transport.sendMail(mailOptions,function(error,info){
	if(error){
		console.warn(error);
	}
	else{
		console.warn("email has been sent",info.response);
	}
})