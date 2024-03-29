"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagePlugin = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const message_handler_1 = require("../handler/message.handler");
async function message(server, opt, done) {
    server.post('/contactus', message_handler_1.messageHandler);
    server.get('/getMessage', message_handler_1.getMessageHandler);
    done();
}
;
exports.messagePlugin = (0, fastify_plugin_1.default)(message);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVyL21lc3NhZ2Uucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0RUFBaUM7QUFDakMsZ0VBQStFO0FBRy9FLEtBQUssVUFBVSxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGdDQUFjLENBQUMsQ0FBQztJQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxtQ0FBaUIsQ0FBQyxDQUFBO0lBRTVDLElBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQztBQUFBLENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBRyxJQUFBLHdCQUFFLEVBQUMsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnAgIGZyb20gJ2Zhc3RpZnktcGx1Z2luJztcbmltcG9ydCB7IGdldE1lc3NhZ2VIYW5kbGVyLCBtZXNzYWdlSGFuZGxlciB9IGZyb20gXCIuLi9oYW5kbGVyL21lc3NhZ2UuaGFuZGxlclwiO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIG1lc3NhZ2Uoc2VydmVyLCBvcHQsIGRvbmUpIHtcbiAgICBzZXJ2ZXIucG9zdCgnL2NvbnRhY3R1cycsIG1lc3NhZ2VIYW5kbGVyKTtcbiAgICBzZXJ2ZXIuZ2V0KCcvZ2V0TWVzc2FnZScsIGdldE1lc3NhZ2VIYW5kbGVyKVxuXG4gICAgZG9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VQbHVnaW4gPSBmcChtZXNzYWdlKTsiXX0=