/**
 * @class routes.js
 * @description Route definitions
 */

const sample = require("./controller/sample");
const system = require("./controller/system");
const login = require("./controller/login");
const jwt = require("../src/common/auth/jwt");
const CRUD_find = require("./controller/user");

const opts = {
  schema: {
    body: {
      type: "object",
      properties: {
        someKey: { type: "string" },
        someOtherKey: { type: "string" },
      },
    },
  },
};

module.exports = (app) => {
  //Default root
  app.get("/", sampleController.get);

  //system routes
  app.get("/system/getall", systemController.getAll);
  app.post("/system/post", systemController.create);

  app.post("/login", opts, async (request, reply) => {
    const data = await CRUD_find.retrieveOne();


    let { userAuthF, userAuthC } = loginController(data, request);

    if (userAuthF === true) {


      const token = jwt.jwtEncode(data[userAuthC].email);

      reply.header("Access-Control-Allow-Origin", "*");
      reply.header(
        "Access-Control-Expose-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, token"
      );

      reply.header("token", token);

      reply.send({
        email: data[userAuthC].email,
        password: data[userAuthC].password,
      });
    } else {
      console.log("fail");

      reply.send({ email: "failed", password: "failed" });
    }

    console.log("checking", userAuthF);
  });
};
