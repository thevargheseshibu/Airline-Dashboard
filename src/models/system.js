/**
 * @class system schema
 * @description Define the model of system schema
 */

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 let systemSchema = new Schema({
     systemId:{type: Number, unique: true},
     name:{type: String, required: true},
     status:{type: String,required: true },
     lastUpdated:{type: Date, default: Date.now}
 });

 module.exports = mongoose.model('system', systemSchema);