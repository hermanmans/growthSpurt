const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type:String, required:true},
});

const heightSchema = new Schema({
    user_height:{type:String,required:true},
    user:{type:Schema.Types.ObjectId,ref:'users'}
});

const Users = mongoose.model('users',userSchema, 'users');
const Height = mongoose.model('height',heightSchema,'height');
const mySchemas = {'Users':Users,'Height':Height};

module.exports = mySchemas;