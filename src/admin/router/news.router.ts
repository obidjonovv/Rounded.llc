import fp  from 'fastify-plugin';
import { createNewsHandler, deleteNewsHandler, getNewshandler, updateNewsHandler, uploadsNewsHandler } from '../handler/news.handler';



async function News(server, opt, done) {
   server.post('/news/uploads', uploadsNewsHandler)
   server.post('/create/news', createNewsHandler);
   server.get('/news', getNewshandler);
   server.put('/update/news/:_id', updateNewsHandler);
   server.delete('/delete/news/:_id', deleteNewsHandler);
//    server.put('/like/project/:_id', likeNewsHandler);

   done();
}

export const newsPlugin = fp(News);