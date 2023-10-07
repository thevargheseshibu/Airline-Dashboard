/**
 * @file index.js is entry file
 * @description webserver using fastify framework
 */

//imports
const Fastify = require("fastify");
const dotenv = require("dotenv");
const mongoose = require("./common/mongodb");
const routes = require("./routes");
const userCredentials = require("../src/models/userCredentials");

//initialize
dotenv.config();

const app = Fastify({
  logger: true,
});

app.register(require("fastify-cors"), {});

SERVER_PORT = process.env.PORT || 8080;

//Default user addition

const user = new userCredentials({
  name: "Admin_Airline",
  email: process.env.DB_PARENT,
  password: process.env.DB_PARENT_PASS,
  status: "value_for_bareden",
});

user.save(function (err, msg) {
  if (err) {
    console.log("Handled Error :", err.stack);
  } else {
    console.log("saving done...", msg);
  }
});

//Register routes
routes(app);

//mongodb connect
mongoose.connectToDB();

//Routes;

//start webserver
const startServer = async () => {
  try {
    await app.listen(SERVER_PORT);
    //app.log.info(`airline Dashboard api listening on ${SERVER_PORT}`)
    console.log(`airline Dashboard api listening on ${SERVER_PORT}`);
  } catch (err) {
    console.log(`Error while starting server !!!`);
    console.error(err);
    process.exit(1);
  }
};

startServer();
