var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Subhash@1234',
  database : 'subhash'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("database connected");
    }
});

// Create Database;




module.exports=connection



