import { FastifyInstance } from "fastify";
import path from "node:path";
import AutoLoad from "@fastify/autoload";

const options = {};

module.exports = async function (fastify: FastifyInstance, opts: any) {
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, "plugins"),
        options: Object.assign({}, opts),
    });

    fastify.register(AutoLoad, {
        dir: path.join(__dirname, "routes"),
        options: Object.assign({}, opts),
    });
};

module.exports.options = options;
