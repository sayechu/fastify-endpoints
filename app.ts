import { FastifyInstance } from "fastify";
import path from "node:path";
import AutoLoad from "@fastify/autoload";

export default async function (fastify: FastifyInstance, opts: any) {
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, "routes"),
        options: Object.assign({}, opts),
    });
}