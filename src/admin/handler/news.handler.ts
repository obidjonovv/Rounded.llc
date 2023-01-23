import { NewsDto } from './../../common/validation/dto/news.dto';
import path from 'path';
import fs from 'fs';

import { DtoGroup } from './../../common/constant/dto.group';
import { validateIt } from './../../common/validation/validate';
import { CreateNewsService, DeleteNewsService, GetNewsService, UpdateNewsService } from '../service/news.service';


export async function uploadsNewsHandler(req, reply) {
    const { file } = req.body;
    console.log(req.file)
    const image = '/' + file.md5 + path.extname(file.name)
    const direction = path.join(__dirname, '../../..', 'uploads');
    const wstream = fs.createWriteStream(direction + image);
    wstream.write(file.data);
    wstream.end();
    reply.success(image)
};

export async function createNewsHandler(req, reply) {
    const data = await validateIt(req.body, NewsDto, DtoGroup.CREATE)   
    const result = await CreateNewsService(data);
    reply.success(result);
}

export async function getNewshandler(req, reply) {
    const result = await GetNewsService();
    reply.success(result);
};

export async function updateNewsHandler(req, reply) {
    const data = await validateIt({ ...req.params, ...req.body }, NewsDto, DtoGroup.UPDATE);
    const result = await UpdateNewsService(data._id, data);
    reply.success(result);
};

export async function deleteNewsHandler(req, reply) {
    const data = await validateIt(req.params, NewsDto, DtoGroup.DELETE);
    const result = await DeleteNewsService(data._id);
    reply.success(result);
};

// export async function likeNewsHandler(req, reply) {
//     const data = await validateIt({ ...req.params, ...req.body }, PostDto, DtoGroup.UPDATE);
//     const result = await LikeNewsService(data._id, data);
//     reply.success(result);
// };