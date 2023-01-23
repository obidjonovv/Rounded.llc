import { DtoGroup } from './../../common/constant/dto.group';
import { MessageDto } from './../../common/validation/dto/message.dto';
import { validateIt } from './../../common/validation/validate';
import { GetMessageService, MessageService } from "../service/message.service";


export async function messageHandler(req, reply) {
    const data = await validateIt(req.body, MessageDto, DtoGroup.CREATE)
    const result = await MessageService(data);
    reply.success(result);
};

export async function getMessageHandler(req, reply) {
    const result = await GetMessageService();
    reply.success(result);
};