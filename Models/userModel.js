var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    first_name: {type:String},
    last_name: {type:String},
    email: {type:String},
    password: {type:String},
    type: {type:Boolean, default:0},
    token: {type:String}
});

module.exports = mongoose.model('Users', userModel);