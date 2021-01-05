const fastify = require("fastify");

function init() {
  const app = fastify();
  app.get("/", (request, reply) => reply.send({ hello: "world" }));
  app.get("/api", (request, reply) => reply.send({ hello: "world" }));
  app.get("/api/item/:slug", (request, reply) =>
    reply.send({ hello: "world" })
  );
  return app;
}

module.exports = init();
