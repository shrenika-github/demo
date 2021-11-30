const {Client}=require('pg');
const client=new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"postgres",
    database:"test"
})
client.connect();
    client.query("select * from users",(err,result)=>{
    if(!err)
    {
        console.log(result.rows);
    }
    client.end();
})
module.exports=client;