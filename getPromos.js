"use strict";
const schemaValidation = require(__basedir + "/schema/promovalidation2");
module.exports = async function (fastify, opts, next) {
  const schema = require(__basedir + "/schema/promovalidation");
  fastify.get("/getData", { schema }, (request, reply) => {
    let { status } = request.query;
    reply.send({
      success: true,
      results: { status },
      msg: "",
    });
  });
  
  fastify.post("/postData", { schema:schemaValidation }, (request, reply) => {
    let bodyParams = request.body;
    reply.send({
      success: true,
      results: bodyParams
    });
  });
};
