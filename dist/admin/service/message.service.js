"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMessageService = exports.MessageService = void 0;
const message_model_1 = require("../../common/db/model/message.model");
const base_service_1 = require("../../common/service/base.service");
async function MessageService(data) {
    try {
        const msg = await (0, base_service_1.create)(message_model_1.MessageModel, data);
        return msg;
    }
    catch (error) {
        console.log(error);
    }
}
exports.MessageService = MessageService;
async function GetMessageService() {
    try {
        const result = await (0, base_service_1.getAll)(message_model_1.MessageModel);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
exports.GetMessageService = GetMessageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkbWluL3NlcnZpY2UvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVFQUFtRTtBQUNuRSxvRUFBbUU7QUFHNUQsS0FBSyxVQUFVLGNBQWMsQ0FBQyxJQUFJO0lBQ3JDLElBQUk7UUFDQSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEscUJBQU0sRUFBQyw0QkFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sR0FBRyxDQUFBO0tBQ2I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFdEI7QUFDTCxDQUFDO0FBUkQsd0NBUUM7QUFFTSxLQUFLLFVBQVUsaUJBQWlCO0lBQ25DLElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEscUJBQU0sRUFBQyw0QkFBWSxDQUFDLENBQUM7UUFDMUMsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFdEI7QUFDTCxDQUFDO0FBUkQsOENBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RiL21vZGVsL21lc3NhZ2UubW9kZWxcIjtcbmltcG9ydCB7IGNyZWF0ZSwgZ2V0QWxsIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zZXJ2aWNlL2Jhc2Uuc2VydmljZVwiO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBNZXNzYWdlU2VydmljZShkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgY3JlYXRlKE1lc3NhZ2VNb2RlbCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBtc2dcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdldE1lc3NhZ2VTZXJ2aWNlKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFsbChNZXNzYWdlTW9kZWwpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgXG4gICAgfVxufSJdfQ==