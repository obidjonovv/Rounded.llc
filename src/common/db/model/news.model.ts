import { CollectionNames } from './../../constant/collections';
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { BaseModel } from './base.model';


@modelOptions({schemaOptions: {collection: CollectionNames.POST}})

export class News extends BaseModel {

    @prop({required: true})
    desc: string

    // @prop()
    // likes: string[]

    @prop()
    image: string

}

export const NewsModel = getModelForClass(News);