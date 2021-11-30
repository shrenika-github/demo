const {Client}=require('pg');
const client=new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"postgres",
    database:"test"
})
client.connect(function(err){
   if(err){
       throw err;
   }
   console.log("Connection Successfull...!!!");
});
client.query("select * from users",(err,result)=>{
    if(!err)
    {
        console.log(result.rows);
    }
    client.end();
})
module.exports=client;