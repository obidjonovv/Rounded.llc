import fp  from 'fastify-plugin';
import { createPostHandler, uploadsHandler, deletePostHandler, getPosthandler, likePostHandler, updatePostHandler } from '../handler/post.handler';



async function Post(server, opt, done) {
   server.post('/uploads', uploadsHandler)
   server.post('/project', createPostHandler);
   server.get('/projects', getPosthandler);
   server.put('/update/project/:_id', updatePostHandler);
   server.delete('/delete/project/:_id', deletePostHandler);
   server.put('/like/project/:_id', likePostHandler);

   done();
}

export const postPlugin = fp(Post);