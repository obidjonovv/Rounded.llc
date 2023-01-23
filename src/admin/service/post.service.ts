import { PostModel } from './../../common/db/model/post.model';

import { create, deleteOne, findById, getAll, updateOneById } from "../../common/service/base.service";

// export async function uploadsService(file) {
//     const result = await 
// }

export async function CreatePostService(data) {
    try {
        const newPost = await create(PostModel, data);
        return newPost;
    } catch (error) {
        console.log(error);

    }
};

export async function GetPostService() {
    try {
        const result = await getAll(PostModel);
        return result;
    } catch (error) {
        console.log(error);

    }
};

export async function UpdatePostService(_id, data) {
    try {
        const post = await updateOneById(PostModel, _id , data);
        return post;
    } catch (error) {
        console.error(error);
    }
};

export async function DeletePostService(_id) {
    try {
        const deletePost = await deleteOne(PostModel, { _id });
        return deletePost;
    } catch (error) {
        console.error(error);
    }
};

export async function LikePostService(_id, data) {
    try {
        const post = await findById(PostModel, _id);
        if (post.likes.includes(data.userId)) {
            await updateOneById(PostModel, _id, { $pull: { likes: data.userId } })
        } else {
            await updateOneById(PostModel, _id, { $push: { likes: data.userId } })
        }
        return true;
    } catch (error) {
        console.error(error);

    }
}


