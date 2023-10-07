/**
 * @class mongodb
 * @description Initialize database connection with Mongodb using mongoose package
 */

 const mongoose = require('mongoose');
 const dotenv = require("dotenv");
 const host = process.env.DB_HOST_PORT || 'mongodb://localhost:27017';
 const database = process.env.DB_NAME || 'airline_dashboard_db';
 const databaseuri = `${host}/${database}`;
 
 dotenv.config();
 
 module.exports = {
 
     /**
      * @function connectToDB
      * @description Estabilish connection with Mongodb
      */
   connectToDB: () => {
     mongoose.connect(databaseuri,(err) => {
       if (err) {
           console.error('Unable to connect database');
           process.exit();
       } else {
           console.info('Connected to database!')
       }
     })
 
   }
 
 }
 