/**
 * @class system schema
 * @description Define the model of system schema
 */

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 let userSchema = new Schema({
     name:{type: String, unique: true},
     email:{type: String, required: true},
     password:{type: String, required: true},
     status:{type: String,required: true },

 });

 module.exports = mongoose.model('userCredentials', userSchema);