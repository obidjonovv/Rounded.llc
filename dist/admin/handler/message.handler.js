"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageHandler = exports.messageHandler = void 0;
const dto_group_1 = require("./../../common/constant/dto.group");
const message_dto_1 = require("./../../common/validation/dto/message.dto");
const validate_1 = require("./../../common/validation/validate");
const message_service_1 = require("../service/message.service");
async function messageHandler(req, reply) {
    const data = await (0, validate_1.validateIt)(req.body, message_dto_1.MessageDto, dto_group_1.DtoGroup.CREATE);
    const result = await (0, message_service_1.MessageService)(data);
    reply.success(result);
}
exports.messageHandler = messageHandler;
;
async function getMessageHandler(req, reply) {
    const result = await (0, message_service_1.GetMessageService)();
    reply.success(result);
}
exports.getMessageHandler = getMessageHandler;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkbWluL2hhbmRsZXIvbWVzc2FnZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlFQUE2RDtBQUM3RCwyRUFBdUU7QUFDdkUsaUVBQWdFO0FBQ2hFLGdFQUErRTtBQUd4RSxLQUFLLFVBQVUsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLO0lBQzNDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsd0JBQVUsRUFBRSxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3BFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBYyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUpELHdDQUlDO0FBQUEsQ0FBQztBQUVLLEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsS0FBSztJQUM5QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsbUNBQWlCLEdBQUUsQ0FBQztJQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFIRCw4Q0FHQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdG9Hcm91cCB9IGZyb20gJy4vLi4vLi4vY29tbW9uL2NvbnN0YW50L2R0by5ncm91cCc7XG5pbXBvcnQgeyBNZXNzYWdlRHRvIH0gZnJvbSAnLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vbWVzc2FnZS5kdG8nO1xuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gJy4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vdmFsaWRhdGUnO1xuaW1wb3J0IHsgR2V0TWVzc2FnZVNlcnZpY2UsIE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvbWVzc2FnZS5zZXJ2aWNlXCI7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1lc3NhZ2VIYW5kbGVyKHJlcSwgcmVwbHkpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXEuYm9keSwgTWVzc2FnZUR0bywgRHRvR3JvdXAuQ1JFQVRFKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE1lc3NhZ2VTZXJ2aWNlKGRhdGEpO1xuICAgIHJlcGx5LnN1Y2Nlc3MocmVzdWx0KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlSGFuZGxlcihyZXEsIHJlcGx5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgR2V0TWVzc2FnZVNlcnZpY2UoKTtcbiAgICByZXBseS5zdWNjZXNzKHJlc3VsdCk7XG59OyJdfQ==