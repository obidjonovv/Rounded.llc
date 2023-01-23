import { NewsModel } from './../../common/db/model/news.model';


import { create, deleteOne, findById, getAll, updateOneById } from "../../common/service/base.service";

// export async function uploadsService(file) {
//     const result = await 
// }

export async function CreateNewsService(data) {
    try {
        const newPost = await create(NewsModel, data);
        return newPost;
    } catch (error) {
        console.log(error);

    }
};

export async function GetNewsService() {
    try {
        const result = await getAll(NewsModel);
        return result;
    } catch (error) {
        console.log(error);

    }
};

export async function UpdateNewsService(_id, data) {
    try {
        const post = await updateOneById(NewsModel, _id , data);
        return post;
    } catch (error) {
        console.error(error);
    }
};

export async function DeleteNewsService(_id) {
    try {
        const deletePost = await deleteOne(NewsModel, { _id });
        return deletePost;
    } catch (error) {
        console.error(error);
    }
};

// export async function LikeNewsService(_id, data) {
//     try {
//         const post = await findById(NewsModel, _id);
//         if (post.likes.includes(data.userId)) {
//             await updateOneById(NewsModel, _id, { $pull: { likes: data.userId } })
//         } else {
//             await updateOneById(NewsModel, _id, { $push: { likes: data.userId } })
//         }
//         return true;
//     } catch (error) {
//         console.error(error);

//     }
// }


