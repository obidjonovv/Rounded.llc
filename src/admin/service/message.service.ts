import { MessageModel } from "../../common/db/model/message.model";
import { create, getAll } from "../../common/service/base.service";


export async function MessageService(data) {
    try {
        const msg = await create(MessageModel, data);
        return msg
    } catch (error) {
        console.log(error);
        
    }
}

export async function GetMessageService() {
    try {
        const result = await getAll(MessageModel);
        return result;
    } catch (error) {
        console.log(error);
        
    }
}