import { newsPlugin } from './router/news.router';
import { postPlugin } from './router/post.router';
import { replyPlugin } from './../common/decorator/reply';
import fastify from "fastify";
import fastifyFileUpload from 'fastify-file-upload';
import { ENV } from "../common/config/config";
import { connectDb } from "../common/db/connector";
import { messagePlugin } from "./router/message.router";

const server = fastify();
server.register(fastifyFileUpload)
server.register(replyPlugin);
server.register(messagePlugin);
server.register(postPlugin);
server.register(newsPlugin);

async function start() {
    try {
        await connectDb()

        server.listen({ port: ENV.ADMIN_PORT, host: ENV.HOST })
        console.log("Server running....")
        console.log("Url : http://localhost:" + ENV.ADMIN_PORT)
    } catch (e) {
        console.log("Error to running server____")
        console.log(e)
    }
}

start();
