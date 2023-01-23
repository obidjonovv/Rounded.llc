import path from 'path';
import fs from 'fs';
import { PostModel } from './../../common/db/model/post.model';
import { DtoGroup } from './../../common/constant/dto.group';
import { validateIt } from './../../common/validation/validate';
import { CreatePostService, DeletePostService, GetPostService, LikePostService, UpdatePostService } from "../service/post.service";
import { PostDto } from '../../common/validation/dto/post.dto';


export async function uploadsHandler(req, reply) {
    const { file } = req.body;
    console.log(req.file)
    const image = '/' + file.md5 + path.extname(file.name)
    const direction = path.join(__dirname, '../../..', 'uploads');
    const wstream = fs.createWriteStream(direction + image);
    wstream.write(file.data);
    wstream.end();
    reply.success(image)
};

export async function createPostHandler(req, reply) {
    const data = await validateIt(req.body, PostDto, DtoGroup.CREATE);
    console.log("datatatat",data);
    
    const result = await CreatePostService(data);
    reply.success(result);
}

export async function getPosthandler(req, reply) {
    const result = await GetPostService();
    reply.success(result);
};

export async function updatePostHandler(req, reply) {
    const data = await validateIt({ ...req.params, ...req.body }, PostDto, DtoGroup.UPDATE);
    const result = await UpdatePostService(data._id, data);
    reply.success(result);
};

export async function deletePostHandler(req, reply) {
    const data = await validateIt(req.params, PostDto, DtoGroup.DELETE);
    const result = await DeletePostService(data._id);
    reply.success(result);
};

export async function likePostHandler(req, reply) {
    const data = await validateIt({ ...req.params, ...req.body }, PostDto, DtoGroup.UPDATE);
    const result = await LikePostService(data._id, data);
    reply.success(result);
};