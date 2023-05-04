var mongoose=require('mongoose');
var db = require('../db');
// create an schema
var userSchema = new mongoose.Schema({
            title: String,
            body:String,
            date:String
        });
userTable=mongoose.model('users',userSchema);
        
module.exports={
     
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }
}