var mongoose = require('mongoose');

//User Schema
var UserSchema = mongoose.Schema({

    email:{
        type : String,
        unique: true,
        require : true
    },
    username:{
        type : String,
        unique: true,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    admin :{
        type : Number
    }
})

var User = module.exports = mongoose.model('User',UserSchema)