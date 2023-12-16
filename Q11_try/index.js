var mysql=require("mysql2");
var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    port:"3306",
    password:"admin@123",
    database:"rohit_63"
});

con.connect(function(error){
    if(error) throw error;
    console.log("connect");

    con.query("select*from account",function(error,result){
        if(error) throw error;
        console.log(result);
    });
})