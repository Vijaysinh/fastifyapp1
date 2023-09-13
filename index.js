global.__basedir = __dirname;

const fastify = require("fastify")({
  logger: true,
});

const autoload = require('@fastify/autoload');
const path = require("path");

fastify.register(autoload, {
  dir: path.join(__dirname, 'controllers')
});


const start = async () => {
  try {
      await fastify.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err);
      process.exit(1);
  }
}
start();

