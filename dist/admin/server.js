"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const reply_1 = require("./../common/decorator/reply");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const config_1 = require("../common/config/config");
const connector_1 = require("../common/db/connector");
const message_router_1 = require("./router/message.router");
const server = (0, fastify_1.default)();
server.register(reply_1.replyPlugin);
server.register(message_router_1.messagePlugin);
async function start() {
    try {
        await (0, connector_1.connectDb)();
        server.listen({ port: config_1.ENV.ADMIN_PORT, host: config_1.ENV.HOST });
        console.log("Server running....");
        console.log("Url : http://localhost:" + config_1.ENV.ADMIN_PORT);
    }
    catch (e) {
        console.log("Error to running server____");
        console.log(e);
    }
}
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFBMEQ7QUFDMUQsOERBQThCO0FBQzlCLG9EQUE4QztBQUM5QyxzREFBbUQ7QUFDbkQsNERBQXdEO0FBRXhELE1BQU0sTUFBTSxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRXpCLE1BQU0sQ0FBQyxRQUFRLENBQUMsbUJBQVcsQ0FBQyxDQUFBO0FBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsOEJBQWEsQ0FBQyxDQUFBO0FBRTlCLEtBQUssVUFBVSxLQUFLO0lBQ2hCLElBQUk7UUFDQSxNQUFNLElBQUEscUJBQVMsR0FBRSxDQUFBO1FBRWpCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsWUFBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQzFEO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNqQjtBQUNMLENBQUM7QUFFRCxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcGx5UGx1Z2luIH0gZnJvbSAnLi8uLi9jb21tb24vZGVjb3JhdG9yL3JlcGx5JztcbmltcG9ydCBmYXN0aWZ5IGZyb20gXCJmYXN0aWZ5XCI7XG5pbXBvcnQgeyBFTlYgfSBmcm9tIFwiLi4vY29tbW9uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCB7IGNvbm5lY3REYiB9IGZyb20gXCIuLi9jb21tb24vZGIvY29ubmVjdG9yXCI7XG5pbXBvcnQgeyBtZXNzYWdlUGx1Z2luIH0gZnJvbSBcIi4vcm91dGVyL21lc3NhZ2Uucm91dGVyXCI7XG5cbmNvbnN0IHNlcnZlciA9IGZhc3RpZnkoKTtcblxuc2VydmVyLnJlZ2lzdGVyKHJlcGx5UGx1Z2luKVxuc2VydmVyLnJlZ2lzdGVyKG1lc3NhZ2VQbHVnaW4pXG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3REYigpXG5cbiAgICAgICAgc2VydmVyLmxpc3Rlbih7IHBvcnQ6IEVOVi5BRE1JTl9QT1JULCBob3N0OiBFTlYuSE9TVCB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBydW5uaW5nLi4uLlwiKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlVybCA6IGh0dHA6Ly9sb2NhbGhvc3Q6XCIgKyBFTlYuQURNSU5fUE9SVClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgdG8gcnVubmluZyBzZXJ2ZXJfX19fXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxufVxuXG5zdGFydCgpO1xuIl19