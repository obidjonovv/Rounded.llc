import { BaseModel } from "./base.model";
export declare class Message extends BaseModel {
    fullName: string;
    phoneNumber: string;
    message: string;
}
export declare const MessageModel: import("@typegoose/typegoose").ReturnModelType<typeof Message, import("@typegoose/typegoose/lib/types").BeAnObject>;
