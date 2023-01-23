import fp  from 'fastify-plugin';
import { getMessageHandler, messageHandler } from "../handler/message.handler";


async function message(server, opt, done) {
    server.post('/contactus', messageHandler);
    server.get('/getMessage', getMessageHandler)

    done();
};

export const messagePlugin = fp(message);